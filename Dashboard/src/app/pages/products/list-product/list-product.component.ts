import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { jsPDF } from 'jspdf';
// @ts-ignore
import autoTable from 'jspdf-autotable';
import { JsonArray, download } from 'json-to-csv-in-browser'

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: Product[]
  searchText;


  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(
      (d) => {
        this.products = d;
        console.log(this.products)
      })

  }

  private getProduct() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.getProduct();
    })
  }

  updateProduct(id: number) {
    this.route.navigate(['/edit_product/' + id]);
  }

  exportPdf(): void {

    const doc = new jsPDF();

    const columns = [['name', 'price', 'quantity', 'full price']];
    const data = [];
    this.products.forEach((item) => {
      data.push([item.name, item.quantity, item.price, item.category.name]);
    });


    autoTable(doc, {
      head: columns,
      body: data,
      didDrawPage: (dataArg) => {
        doc.text('list of products', dataArg.settings.margin.left, 10);
      }
    });

    doc.save('products.pdf');
  }


exportCsv() {
  
  let arr = []
  this.products.forEach(product => {
    let data = {name: product.name , quantity : product.quantity , price : product.price , category : product.category.name  }
    arr.push(data)
  })
  const jsonArray = new JsonArray(arr);
  const str = jsonArray.convertToCSVstring();
  download("products.csv", str);
  }
}

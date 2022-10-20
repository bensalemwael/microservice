import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
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

 
}

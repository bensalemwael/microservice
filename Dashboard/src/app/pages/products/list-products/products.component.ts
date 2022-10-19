import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]= [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(
      (d) => {
        this.products=d ;
        console.log(this.products)
      })
  }

}

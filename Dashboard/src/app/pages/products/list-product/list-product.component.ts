import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  constructor(private productService : ProductService) { }
  products:any[] 

  ngOnInit(): void {

    this.productService.getProducts().subscribe(
      (d) => {
        this.products=d ;
        console.log(this.products)
      })

  }

}

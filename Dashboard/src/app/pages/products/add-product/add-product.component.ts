import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  categories:Category[] = [] ;
  product : Product = new Product() ;
  categoryId : number ;
  constructor(private categoryService : CategoryService , private productService :ProductService ,private route: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data =>
      {this.categories = data}, error => console.log(error));
  }
   
  onSubmit() {
    this.productService.addProduct(this.product,this.categoryId).subscribe(data =>
      this.goToProducts()
    );
 

    
  };

  goToProducts() {
    this.route.navigate(['/products']);
  }

}

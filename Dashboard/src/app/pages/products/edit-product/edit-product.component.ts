import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  categories: Category[] = [];
  product: Product = new Product();
  id: number;
  categoryId: number;
  categoryName: string;
  constructor(private productService: ProductService, private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data => {
      this.product = data
      this.categoryId=this.product.category.id ; 
      this.categoryName=this.product.category.name ; 

    }, error => console.log(error));
    this.categoryService.getCategories().subscribe(data => { this.categories = data }, error => console.log(error));
  }

  onSubmit() {
    this.productService.updateProduct(this.product,this.categoryId).subscribe(data =>
       this.router.navigate(['/products'])
       )

  }
} 

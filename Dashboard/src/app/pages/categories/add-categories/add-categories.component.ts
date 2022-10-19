import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss']
})
export class AddCategoriesComponent implements OnInit {

  category : Category = new Category() ;

  constructor(private categoryService : CategoryService ,   private route: Router   ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.categoryService.addCategory(this.category).subscribe();
    this.goToCategories();

  
  };

  goToCategories() {
    this.route.navigate(['/categories']);
  }


  

 
}

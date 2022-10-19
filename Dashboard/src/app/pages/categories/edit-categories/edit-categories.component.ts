import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {

  category : Category = new Category ;
  id:number;

  constructor(private categoryService : CategoryService,private route : ActivatedRoute,private router : Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategory(this.id).subscribe(data =>
      {this.category = data}, error => console.log(error));
  }

  onSubmit(){
    this.categoryService.addCategory(this.category).subscribe();
    this.router.navigate(['/categories']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  categories : Category[] = [] ;

  constructor(private categoryService : CategoryService , private route : Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (d)=>{
        this.categories= d ;
      }
    )  }


    private getCategory()
    {
      this.categoryService.getCategories().subscribe(
        (data)=> {
          this.categories=data; });
    }

    deleteCategory(id:number){
      this.categoryService.deleteCategory(id).subscribe(data =>
        { console.log(data);
          this.getCategory()
        } )
    }

    updateCategory(id:number){
      this.route.navigate(['/edit_category/'+id]);}

}

import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = environment.base_URL + 'categories/'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url)
  }

  addCategory(category: Category): Observable<Object> {
    console.log(category)
    return this.http.post(this.url,category)
  }

  deleteCategory(id: number) {
    return this.http.delete(this.url+ id);
  }

  updateCategory(category: Category) {
    return this.http.put(this.url , category);
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.url+id)
  }

}

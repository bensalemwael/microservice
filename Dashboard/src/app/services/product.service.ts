import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.base_URL + 'products/'


  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }

  addProduct(product: Product, categoryId : number): Observable<Object> {
    return this.http.post(this.url+categoryId, product)
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url+ id);
  }

  updateProduct(product: Product, categoryId:number) {
    return this.http.put(this.url+categoryId , product);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.url+id)
  }

 
}

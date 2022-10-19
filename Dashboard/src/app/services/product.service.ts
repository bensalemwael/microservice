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

 
}

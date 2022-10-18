import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/app/environment/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.microservice_rh
  
  constructor(private http: HttpClient) {

   }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.url + '/getall');
  }
}

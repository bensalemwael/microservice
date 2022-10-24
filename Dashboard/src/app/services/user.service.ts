import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/app/environment/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.base_URL + "users/"
  auth = environment.base_URL + "auth/login"  
  authsignup = environment.base_URL + "auth/signup"  

  constructor(private http: HttpClient) {

   }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  deleteUser(user_id:number) {
    return this.http.delete(this.url+user_id).subscribe()
  }

  login(email:string,password:string) {
     return this.http.post(this.auth,{"email" : email , "password" : password})
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.authsignup, user)
  }

}

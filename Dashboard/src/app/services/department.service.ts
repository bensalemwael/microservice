import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { Department } from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  url = environment.base_URL + "departments/"
  
  constructor(private http: HttpClient) {

   }

  getDepartments() : Observable<Department[]> {
    return this.http.get<Department[]>(this.url)
  }

  addDepartment(department:Department) {
   this.http.post<Department>(this.url,department).subscribe()
  }
  deleteDepartment(department_id:number) {
    this.http.delete(this.url+department_id).subscribe()
  }

  getDepartmentById(department_id:number) {
    return this.http.get<Department>(this.url+department_id)
  }

  editDepartment(department:Department) {
    this.http.put(this.url+department.departementId,department).subscribe()
  }

}

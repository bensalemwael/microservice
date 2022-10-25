import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insurance } from '../models/Insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  url = environment.base_URL + 'insurances/'


  constructor(private http: HttpClient) { }


  getInsurances(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.url)
  }

  addInsurance(insurance: Insurance,car_id:number): Observable<Object> {
    return this.http.post(this.url+car_id, insurance)
  }

  deleteInsurance(id: number) {
    return this.http.delete(this.url+ id);
  }

  updateInsurance(insurance: Insurance) {
    return this.http.put(this.url, insurance);
  }

  getInsurance(id: number): Observable<Insurance> {
    return this.http.get<Insurance>(this.url+id)
  }

}

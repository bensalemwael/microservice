import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/app/environment/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  url = environment.base_URL + "absences/"
  constructor(private http: HttpClient) {

  }
 
  addabsence(userid): Observable<any> {
    let d=new Date();
    d.toISOString().substring(0, 5);
    return this.http.post<any>(this.url+userid, {date:d,cause:"malade"})
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { Partner } from '../models/Partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  url = environment.base_URL + "partners/"
  constructor(private http: HttpClient) { }

  getPartners() : Observable<Partner[]> {
    return this.http.get<Partner[]>(this.url)
  }

  deletePartner(partner_id:number) {
    return this.http.delete(this.url+partner_id).subscribe()
  }

  addPartner(partner:Partner) {
    return this.http.post(this.url,partner)
  }

  editPartner(partner:Partner) {
    return this.http.put(this.url,partner)
  }

  getPartnerById(partner_id:number) : Observable<Partner> {
    return this.http.get<Partner>(this.url+partner_id)
  }

}

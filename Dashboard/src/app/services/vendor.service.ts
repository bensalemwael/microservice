import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../models/Vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  url = environment.base_URL + "vendors/"
  constructor(private http: HttpClient) { }

  getVendors() : Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.url)
  }

  deleteVendor(vendor_id:number) {
    return this.http.delete(this.url+vendor_id).subscribe()
  }

  addVendor(vendor:Vendor) {
    return this.http.post(this.url,vendor)
  }

  editVendor(vendor:Vendor) {
    return this.http.put(this.url,vendor)
  }

  getVendorById(vendor_id:number) : Observable<Vendor> {
    return this.http.get<Vendor>(this.url+vendor_id)
  }

}

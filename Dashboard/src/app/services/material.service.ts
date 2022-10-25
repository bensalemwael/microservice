import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/Material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  url = "http://localhost:8087/materials/"
  constructor(private http: HttpClient) { }

  getMaterials() : Observable<Material[]> {
    return this.http.get<Material[]>(this.url)
  }

  deleteMaterial(material_id:number) {
    return this.http.delete(this.url+material_id).subscribe()
  }

  addMaterial(material:Material,vendor_id:number) {
    console.log(material)
    return this.http.post(this.url+vendor_id,material)
  }

  editMaterial(material:Material) {
    return this.http.put(this.url,material)
  }

  getMaterialById(material_id:number) : Observable<Material> {
    return this.http.get<Material>(this.url+material_id)
  }

}

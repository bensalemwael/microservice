import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/Material';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  url = environment.base_URL + "materials/"
  constructor(private http: HttpClient) { }

  getMaterials() : Observable<Material[]> {
    return this.http.get<Material[]>(this.url)
  }

  deleteMaterial(material_id:number) {
    return this.http.delete(this.url+material_id).subscribe()
  }

  addMaterial(material:Material) {
    return this.http.post(this.url,material)
  }

  editMaterial(material:Material) {
    return this.http.put(this.url,material)
  }

  getMaterialById(material_id:number) : Observable<Material> {
    return this.http.get<Material>(this.url+material_id)
  }
}

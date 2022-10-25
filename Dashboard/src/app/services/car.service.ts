import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url = environment.base_URL + 'cars/'


  constructor(private http: HttpClient) { }


  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url)
  }

  addCar(car: Car): Observable<Object> {
    return this.http.post(this.url, car)
  }

  deleteCar(id: number) {
    return this.http.delete(this.url+ id);
  }

  updateCar(car: Car) {
    return this.http.put(this.url, car);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.url+id)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[]
  searchText;

  constructor(private carService: CarService, private route: Router) { }

  ngOnInit(): void {

    this.carService.getCars().subscribe(
      (d) => {
        this.cars = d;
        console.log(this.cars)
      })
  }

  private getCars() {
    this.carService.getCars().subscribe(
      (data) => {
        this.cars = data;
      });
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(data => {
      this.getCars();
    })
  }

  updateCar(id: number) {
    this.route.navigate(['/edit_car/' + id]);
  }

}

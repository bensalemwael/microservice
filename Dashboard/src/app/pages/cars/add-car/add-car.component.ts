import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  car : Car = new Car()

  constructor(private carService : CarService ,private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.carService.addCar(this.car).subscribe(data =>
      this.route.navigate(['/cars']))
    }
   
 

}

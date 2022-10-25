import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { Insurance } from 'src/app/models/Insurance';
import { CarService } from 'src/app/services/car.service';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.scss']
})
export class AddInsuranceComponent implements OnInit {
  cars:Car[] = [] ;
  insurance : Insurance = new Insurance() ;
  carId : number ;
  constructor(private insuranceService : InsuranceService , private carService :CarService ,private route: Router) { 

  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(data =>
      {this.cars = data}, error => console.log(error));
  }

   
  onSubmit() {
    this.insuranceService.addInsurance(this.insurance,this.carId).subscribe(data =>
      this.route.navigate(['/insurances']))}

  };


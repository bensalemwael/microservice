import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { Insurance } from 'src/app/models/Insurance';
import { CarService } from 'src/app/services/car.service';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-edit-insurance',
  templateUrl: './edit-insurance.component.html',
  styleUrls: ['./edit-insurance.component.scss']
})
export class EditInsuranceComponent implements OnInit {

  cars:Car[] = [] ;
  insurance : Insurance = new Insurance() ;
  carId : number ;
  id : number;
  constructor(private insuranceService : InsuranceService , private carService :CarService ,private route: Router,private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];
    this.insuranceService.getInsurance(this.id).subscribe(res => {
      this.insurance = res
    })

    this.carService.getCars().subscribe(data =>
      {this.cars = data}, error => console.log(error));
  }

  onSubmit() {
    this.insuranceService.updateInsurance(this.insurance,this.carId).subscribe(data =>
      this.route.navigate(['/insurances']))}

  }



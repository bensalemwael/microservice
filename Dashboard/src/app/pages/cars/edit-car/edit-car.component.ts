import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  car : Car =  new Car()
  id :number
  constructor(private carService : CarService ,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.carService.getCar(this.id).subscribe(data => {
      this.car = data
    })
  }

  onSubmit() {
    this.carService.updateCar(this.car).subscribe(data =>
       this.router.navigate(['/cars'])
       )

  }

}

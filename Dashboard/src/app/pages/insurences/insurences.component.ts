import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from 'src/app/models/Insurance';
import { InsuranceService } from 'src/app/services/insurance.service';

@Component({
  selector: 'app-insurences',
  templateUrl: './insurences.component.html',
  styleUrls: ['./insurences.component.scss']
})
export class InsurencesComponent implements OnInit {

  insurances : Insurance[] ;
  searchText;
  constructor(private insuranceService: InsuranceService, private route: Router) { }

  ngOnInit(): void {

    this.insuranceService.getInsurances().subscribe(
      (d) => {
        this.insurances = d;
      })
  }

  private getInsurances() {
    this.insuranceService.getInsurances().subscribe(
      (data) => {
        this.insurances = data;
      });
  }

  deleteInsurance(id: number) {
    this.insuranceService.deleteInsurance(id).subscribe(data => {
      this.getInsurances();
    })
  }

  updateInsurance(id: number) {
    this.route.navigate(['/edit_insurance/' + id]);
  }

}

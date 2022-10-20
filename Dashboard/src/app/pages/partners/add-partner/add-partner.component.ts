import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Partner } from 'src/app/models/Partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.scss']
})
export class AddPartnerComponent implements OnInit {

  form: FormGroup;
  constructor(private partnerService:PartnerService,private fb: FormBuilder ,private router: Router) {
    this.createForm()
   }

  ngOnInit(): void {
  }

  addPartner() {
    if (this.form.valid)
    {
      let partner:Partner = this.form.value;
      this.partnerService.addPartner(partner).subscribe(res => {
        this.router.navigate(['/partners'])
      })
    }
    
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      budget: ['', Validators.required ],
      percentage: ['', Validators.required ],
      starting_date: ['', Validators.required ],
    });
  }

}

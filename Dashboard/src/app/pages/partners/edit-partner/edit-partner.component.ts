import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Partner } from 'src/app/models/Partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.component.html',
  styleUrls: ['./edit-partner.component.scss']
})
export class EditPartnerComponent implements OnInit {

  form: FormGroup;
  partner:Partner ;

  constructor(private activatedroute:ActivatedRoute,private fb: FormBuilder,private partnerService : PartnerService,private router: Router) {
    this.createForm()

   }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      this.partnerService.getPartnerById(params['partner_id']).subscribe(res => {
        this.partner = res;
        this.form.get('name').setValue( this.partner.name);
        this.form.get('budget').setValue( this.partner.budget);
        this.form.get('percentage').setValue( this.partner.percentage);
        this.form.get('starting_date').setValue( this.partner.starting_date);
      })
      });
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      budget: ['', Validators.required ],
      percentage: ['', Validators.required ],
      starting_date: ['', Validators.required ],
    });
  }

  editPartner() {
    this.partner['name'] = this.form.value['name'] ;
    this.partner['budget'] = this.form.value['budget'] ;
    this.partner['percentage'] = this.form.value['percentage'] ;
    this.partner['starting_date'] = this.form.value['starting_date'] ;
    this.partnerService.editPartner(this.partner).subscribe(res => {
      this.router.navigate(['/partners']) ;
    })
  }

}

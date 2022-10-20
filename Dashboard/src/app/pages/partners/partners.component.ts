import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partner } from 'src/app/models/Partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners:Partner[] = []

  constructor(private partnerService : PartnerService , private router: Router) { }

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe(res => {
      this.partners = res ; 
    })
  }

  deletePartner(partner_id:number) {
    this.partnerService.deletePartner(partner_id)
    this.partners = this.partners.filter(p => p.id != partner_id)
  }

  editPartner(partner_id:number) {
    this.router.navigate(['edit_partner/'+partner_id])
  }

}

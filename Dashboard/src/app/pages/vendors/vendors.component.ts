import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/models/Vendor';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  vendors:Vendor[] = []

  constructor(private vendorService : VendorService , private router: Router) { }

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe(res => {
      this.vendors = res ; 
    })
  }

  deleteVendor(vendor_id:number) {
    this.vendorService.deleteVendor(vendor_id)
    this.vendors = this.vendors.filter(p => p.vendorId != vendor_id)
  }

  editVendor(vendor_id:number) {
    this.router.navigate(['edit_vendor/'+vendor_id])
  }

}

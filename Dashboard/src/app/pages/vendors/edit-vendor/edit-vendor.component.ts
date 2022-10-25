import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/models/Vendor';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {

  vendor : Vendor = new Vendor() ;

  constructor(private vendorService :VendorService ,private route: Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      this.vendorService.getVendorById(params['id']).subscribe(res => {
        this.vendor = res;
      });
    })
  }
  
     
  onSubmit() {
    this.vendorService.editVendor(this.vendor).subscribe(data =>
      this.route.navigate(['/vendors']))
    }

}
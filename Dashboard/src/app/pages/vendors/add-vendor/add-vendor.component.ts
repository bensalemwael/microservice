import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/models/Vendor';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
  vendor : Vendor = new Vendor() ;

  constructor(private vendorService :VendorService ,private route: Router) { }

  ngOnInit(): void {
  }

     
  onSubmit() {
    this.vendorService.addVendor(this.vendor).subscribe(data =>
      this.route.navigate(['/vendors']))
    }
    

}
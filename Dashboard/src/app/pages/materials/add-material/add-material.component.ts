import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from 'src/app/models/Material';
import { Vendor } from 'src/app/models/Vendor';
import { MaterialService } from 'src/app/services/material.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss']
})
export class AddMaterialComponent implements OnInit {
  material : Material = new Material() ;
  vendors:Vendor[] = [] ;
  vendorId : number;
  constructor(private materialService : MaterialService ,private vendorService : VendorService , private router: Router) { }

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe(res => {
      this.vendors = res;
    })

  }
  onSubmit() {
    this.materialService.addMaterial(this.material,this.vendorId).subscribe(data =>
      this.router.navigate(['/materials']))
    }
    
}

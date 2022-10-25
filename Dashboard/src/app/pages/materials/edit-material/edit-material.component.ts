import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from 'src/app/models/Material';
import { Vendor } from 'src/app/models/Vendor';
import { MaterialService } from 'src/app/services/material.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.scss']
})
export class EditMaterialComponent implements OnInit {

  vendors: Vendor[] = [];
  id: number;
  material: Material = new Material();
  vendorId : number 
  vendorFirstName : string

  constructor(private vendorService : VendorService ,private route: ActivatedRoute, private router: Router , private materielService : MaterialService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.materielService.getMaterialById(this.id).subscribe(
      data => {
        this.material=data
        this.vendorId=this.material.vendor.vendorId
        this.vendorFirstName=this.material.vendor.firstName

      }, error => console.log(error))
      this.vendorService.getVendors().subscribe(data =>
        { this.vendors = data }, 
        error => console.log(error));
        
    
  }

  onSubmit() {
    this.materielService.editMaterial(this.material).subscribe(data =>
       this.router.navigate(['/materials'])
       )
  
}
}
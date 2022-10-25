import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from 'src/app/models/Material';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  materials:Material[] = []

  constructor(private materialService : MaterialService , private router: Router) { }

  ngOnInit(): void {
    this.materialService.getMaterials().subscribe(res => {
      this.materials = res ; 
    })
  }

  deleteMaterial(material_id:number) {
    this.materialService.deleteMaterial(material_id)
    this.materials = this.materials.filter(p => p.materialId != material_id)
  }

  editMaterial(material_id:number) {
    this.router.navigate(['edit_material/'+material_id])
  }


}

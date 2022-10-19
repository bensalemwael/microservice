import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments:Department[] = []

  constructor(private departmentService : DepartmentService  , private router: Router) { 
    this.departmentService.getDepartments().subscribe(res => {
      this.departments = res
    })
  }

  ngOnInit(): void {

  }
  
  deleteDepartment(department_id:number) {
    this.departmentService.deleteDepartment(department_id)
    this.departments = this.departments.filter(dep => dep.departementId != department_id)
  }

  editDepartment(department_id:number) {
    this.router.navigate(['edit_department/'+department_id])

  }
}

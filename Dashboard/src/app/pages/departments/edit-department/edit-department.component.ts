import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {

  form: FormGroup;
  department:Department ;
  constructor(private activatedroute:ActivatedRoute,private fb: FormBuilder,private departmentService : DepartmentService,private router: Router) {
    this.createForm()
   }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
    this.departmentService.getDepartmentById(params['department_id']).subscribe(res => {
      console.log(res)
      this.department = res;
      this.form.get('departmentName').setValue( this.department.departmentName);
    })
    });
  }

  createForm() {
    this.form = this.fb.group({
      departmentName: ["", Validators.required ],
    });
  }
  editDepartment() {
    this.department['departmentName'] = this.form.value['departmentName']
    this.departmentService.editDepartment(this.department)
    this.router.navigate(['/departments'])

  }

}

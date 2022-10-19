import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/services/department.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder , private departmentService : DepartmentService , private router: Router) { 
    this.createForm()
  }

  ngOnInit(): void {
  }

  addDepartment() {
    if (this.form.valid)
    {
      let department:Department = this.form.value;
      this.departmentService.addDepartment(department)
      this.router.navigate(['/departments'])
    }
    
    
    
  }

  createForm() {
    this.form = this.fb.group({
       nomDepartement: ['', Validators.required ],
    });
  }
}

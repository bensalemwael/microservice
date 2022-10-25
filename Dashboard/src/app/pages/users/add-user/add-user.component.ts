import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
   options: any[] = [{id:2,name:"Employee"},{id:1,name:"RH"}];
  categoryId : string ;
  departmentId : number ;

  user : User = new User() ;




  departments:Department[] = [] ;

  constructor(private route: Router, private departmentService : DepartmentService, private userService : UserService , private router: Router) { 

  }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(data =>
      {this.departments = data}, error => console.log(error));
  }

  onSubmit() {
    console.log(this.categoryId)
    console.log(this.user)
    this.user.role=this.categoryId;
    this.user.departementid=this.departmentId

     this.userService.addUser(this.user).subscribe(data =>
      {   
        console.log(data["userId"]) 
        this.departmentService.AffectToDepartment(this.departmentId,data["userId"]);
       // this.route.navigate(['/users']);

    }
      
      )

   
     
    
  }
}


import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/Department';
import { User } from 'src/app/models/User';
import { AbsenceService } from 'src/app/services/absence.service';
import { DepartmentService } from 'src/app/services/department.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[] = []
  departments:Department[] = []
  constructor(private departmentService : DepartmentService,private userService : UserService,private absenceService : AbsenceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      console.log(res)
      this.users = res 
    })

    this.departmentService.getDepartments().subscribe(res => {
      this.departments = res
    })
  }
  
  addabsence(userId:number) {
    this.absenceService.addabsence(userId).subscribe(data =>
      {    
       console.log(data);
    })
  }
  deleteUser(userId:number) {
    this.userService.deleteUser(userId)
    this.users = this.users.filter(u => u.userId != userId)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
user :User 
  constructor( private userService : UserService,private route: Router) { }

  ngOnInit() {
    this.userService.getUserById(localStorage.getItem("email")).subscribe(
      (data)=> {
       this.user=data
        console.log(data); 
      });
  }

}

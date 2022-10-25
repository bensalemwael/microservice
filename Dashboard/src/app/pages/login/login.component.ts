import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  error = ""
  constructor(private fb: FormBuilder , private userService : UserService,private route: Router) {
    this.createForm()
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  createForm() {
    this.form = this.fb.group({
       email: ['', Validators.required ],
       password: ['', Validators.required ],

    });
  }

  login() {
    if (this.form.valid) {
        this.userService.login( this.form.value['email'], this.form.value['password']).subscribe(res => {
          console.log(res)
          localStorage.setItem("token",res["accessToken"])
          localStorage.setItem("role",res["role"])
          console.log(res)
          this.route.navigate(['/dashboard']);
          this.error = ""
        },(err) => {
          this.error = "check email or password"
        })
      }
  }

}

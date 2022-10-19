import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  error = ""
  constructor(private fb: FormBuilder , private userService : UserService) {
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
          this.error = ""
        },(err) => {
          this.error = "check email or password"
        })
      }
  }

}

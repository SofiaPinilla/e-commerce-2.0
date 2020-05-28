import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
  }

  login(event) {
    console.log('hola')
    event.preventDefault();
    const form = event.target;
    const user = {
      name: form.name.value,
      password: form.password.value,
    }
    this.userService.login(user)
      .subscribe(
        res => {
          console.log(res);
          // this.message = res.message;
          this.userService.setUser(res.user);
          localStorage.setItem('authToken',res.token);
          // setTimeout(() => this.message = "", 2500);
          setTimeout(() => {
            this.router.navigate(['profile'])
          }, 2500);
        },
        // err => {
        //   this.errorMsg = err.error.message
        //   setTimeout(() => this.errorMsg = "", 2500);
        // }
      )
    event.target.reset();
  }
}

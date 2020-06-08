import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public message:string
public errorMsg:string
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
          this.message= "Connected successfully";
          setTimeout(() => this.message="", 2500);
          this.userService.setUser(res.user);
          this.userService.setToken(res['token']);
          localStorage.setItem('authToken',res.token);
          // setTimeout(() => this.message = "", 2500);
          setTimeout(() => {
            this.router.navigate(['profile'])
          }, 2500);
        },
        err => {
          this.errorMsg = "Incorrect user or password"
          setTimeout(() => this.errorMsg = "", 2500);
        }
      )
    event.target.reset();
  }
}

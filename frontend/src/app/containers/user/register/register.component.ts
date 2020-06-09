import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public message:string
public errorMsg:string
  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
  }

  register(registerForm:NgForm){
    if (!registerForm.controls.email.valid) {
      return this.errorMsg='This mail already exists', setTimeout(() => this.errorMsg="", 5000);  
    }
    if (!registerForm.controls.password.valid) {
      return this.errorMsg='Your password must contain at least a lowercase letter, a uppercase letter, a number, and must be between 8 and 40 characters', setTimeout(() => this.errorMsg="", 5000);
     
    }
    // if(!registerForm.valid) return;
    const user=registerForm.value;
    this.userService.signup(user)
    .subscribe(
      res=>{
        console.log(res);
        this.message= "Successfully registered";
        setTimeout(() => this.message="", 2500);
        setTimeout(() => {
          this.router.navigate(['login'])
        }, 2500);
      },
      err=>console.error(err)
    )
    registerForm.reset();
  }
}

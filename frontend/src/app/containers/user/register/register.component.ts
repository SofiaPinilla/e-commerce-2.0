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
  constructor(public userService:UserService,public router:Router) { }

  ngOnInit(): void {
  }

  register(registerForm:NgForm){
    console.log('hola')
    if(!registerForm.valid) return;
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

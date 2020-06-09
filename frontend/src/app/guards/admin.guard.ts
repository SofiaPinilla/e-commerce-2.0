import { Injectable,OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements  CanActivate {
  constructor(public userService:UserService,public router:Router) {}
 
  usuario(){
    console.log('hola')
 const token: string = localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
      .subscribe(((res: HttpResponse<any>)  => {
        this.userService.user = res
        console.log(this.userService.user)
    }),(error: HttpErrorResponse) => console.error(error))
  }
  canActivate(){
    this.usuario()
    const token: string = localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
    .subscribe(((res: HttpResponse<any>)  => {
      this.userService.user = res
      console.log(this.userService.user)
      if (this.userService['user']['role']=='admin'){
        return true;
      } 
        this.router.navigate(['login']);
        return false;
    }
    ),(error: HttpErrorResponse) => console.error(error))}
  
  
  
  
}

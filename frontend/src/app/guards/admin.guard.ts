import { Injectable,OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public userService:UserService,public router:Router) {}
  ngOnInit(): void {
    const token: string = localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
      .subscribe((res => {
        this.userService.user = res
    }))
  }
  canActivate(){
    const token: string = localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
    if (this.userService['user']['role']=='admin'){
      return true;
    } 
      this.router.navigate(['login']);
      return false;
   
  }
  
  
  
  
}

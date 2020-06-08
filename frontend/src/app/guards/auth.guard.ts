import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public userService: UserService, public router:Router){}
  canActivate(){
    const token= localStorage.getItem('authToken')
    if (token){
      return true;
    }
      this.router.navigate(['login']);
      return false;
  }
  
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService:UserService,public route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.userService.setUser(undefined);
    localStorage.removeItem('authToken');
    this.route.navigate([''])
  }
}

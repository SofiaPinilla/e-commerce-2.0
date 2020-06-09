import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const token = 'Bearer '+ localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
      .subscribe(((res: HttpResponse<any>)  => {
        this.userService.user = res
    }),(error: HttpErrorResponse) => console.error(error))
  }

}

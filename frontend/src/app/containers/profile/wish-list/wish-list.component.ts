import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const token = 'Bearer '+ localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
      .subscribe(((res: HttpResponse<any>)  => {
        this.userService.user = res
    }),(error: HttpErrorResponse) => console.error(error))
  }
}

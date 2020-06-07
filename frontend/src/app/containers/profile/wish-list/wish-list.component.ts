import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
      .subscribe((res => {
        this.userService.user = res
    }))
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-buy-end',
  templateUrl: './buy-end.component.html',
  styleUrls: ['./buy-end.component.scss']
})
export class BuyEndComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const token = 'Bearer '+ localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
      .subscribe((res => {
        this.userService.user = res
    }))
  }

}

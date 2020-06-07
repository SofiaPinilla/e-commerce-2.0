import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const token = 'Bearer '+ localStorage.getItem('authToken')
    this.userService.getUserInfo(token)
    .subscribe((res => {
      const totals = this.userService.user.orders.map(order=> order.products.map(product => product.price
        ));
        this.userService.user = res
    }))
  }
  sumTotal(acc,cur){
    return acc+cur.price*cur.pivot.units;
  }
}

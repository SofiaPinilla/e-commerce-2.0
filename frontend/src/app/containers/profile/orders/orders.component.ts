import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

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
    .subscribe(((res: HttpResponse<any>)  => {
      const totals = this.userService.user.orders.map(order=> order.products.map(product => product.price
        ));
        this.userService.user = res
    }),(error: HttpErrorResponse) => console.error(error))
  }
  sumTotal(acc,cur){
    return acc+cur.price*cur.pivot.units;
  }
}

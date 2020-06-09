import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products2;
  inputSearch;
  constructor(public productService: ProductService, public userService: UserService, public router: Router, public route: ActivatedRoute, public location: Location) { }

  ngOnInit(): void {
    this.productService.getLimitProduct()
      .subscribe((res: HttpResponse<any>) => {
        this.productService.products2 = res
      })
  }
  search(event) {
    console.log(event);
    if (event.code === 'Enter') {
      this.productService.searchProduct(event.target.value)
        .subscribe(
          (res: HttpResponse<any>)  =>{
            this.productService.products2 = res
          } ,
          (error: HttpErrorResponse) => console.error(error)
        );
    }
  }
}

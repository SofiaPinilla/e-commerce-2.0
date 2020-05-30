import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public productService:ProductService, public route: ActivatedRoute, public location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    this.productService.getProductId(id)
      .subscribe(product => {
        this.productService.product = product
        console.log(product)
      })
  }

}

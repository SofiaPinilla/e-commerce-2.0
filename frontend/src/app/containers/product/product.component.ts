import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  inputValue: string | null;
  textValue
  constructor(public productService:ProductService, public route: ActivatedRoute, public location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    this.productService.getProductId(id)
      .subscribe(product => {
        this.productService.product = product
      })
  }

  postReview(reviewForm,imageInput) { // comentar
    const id = this.route.snapshot.params.id;
    const reviewFormData = new FormData();
    if (reviewForm.value.review) reviewFormData.set('review', reviewForm.value.review);
    if (imageInput.files[0]) reviewFormData.set('img', imageInput.files[0]);
    
    this.productService.postReview(reviewFormData, id)
      .subscribe((res: HttpResponse<any>) => {
        imageInput.value = '';
        this.textValue = '';
        this.productService.setReview(this.productService.review)
        this.productService.setProduct(this.productService.product)
        imageInput.value = '';
        this.productService.review = {
          review: ''
        }
        this.productService.getProductId(id)
      .subscribe(product => {
        this.productService.product = product
      })

        err => console.error(err);
      })

  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showModal: boolean = false;
  public message: string;
  public messageUpdated:string;
  @Output()
  onClose = new EventEmitter();
  currentProduct: object;
  constructor(public productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(res => {
        this.productService.products = res
      })
  }
  
  editProduct(productForm) { // comentar
    const product = productForm.value
    this.productService.editProduct(product, this.currentProduct['id'])
      .subscribe(res => {
        this.productService.setProduct(this.productService.product)
        this.productService.product = {
          product: ''
        }
        this.messageUpdated = 'product succesfully updated';
        setTimeout(() => this.messageUpdated = "", 2500);
        this.productService.getAll()
          .subscribe(res => {
            this.productService.products = res
          })
        err => console.error(err);
      })
  }
  selectItem(product) {
    this.showModal = true;
    this.currentProduct = product;
  }
  cancel() { this.onClose.emit(null); }

  deleteProduct(productId) {
    this.productService.delete(productId)
      .subscribe(res => {
        this.message = 'product succesfully  deleted';
        setTimeout(() => this.message = "", 2500);
        this.productService.getAll()
        .subscribe(res => {
          this.productService.products = res
        })
       
      },
        error => {
          console.log(error);
        }
      )
  }
  search(event) {
   
    this.productService.searchProduct(event.target.value)
    .subscribe(
      (res: HttpResponse<any>)  =>{
        this.productService.products = res
      } ,
      
      (error: HttpErrorResponse) => console.error(error)
      );
}
}

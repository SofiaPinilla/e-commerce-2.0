import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output()
  onClose = new EventEmitter();
  constructor(public productService: ProductService) { }
  ngOnInit() {
  }
  cancel() { this.onClose.emit(null); }

  editProduct(productForm,productId) { // comentar
    const product = productForm.value
   this.productService.editProduct(product,productId)
       .subscribe(res=> {
         this.productService.setProduct(this.productService.product)
         this.productService.product = {
           product: ''
         }
         this.productService.getAll()
         .subscribe(res => {
           this.productService.products = res
       })
         err => console.error(err);
       })
   }
}

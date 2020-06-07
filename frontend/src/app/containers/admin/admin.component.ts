import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }
  postProduct(productForm,imageInput) { // comentar
    const productFormData = new FormData();
    if (productForm.value.name) productFormData.set('name', productForm.value.name);
    if (productForm.value.price) productFormData.set('price', productForm.value.price);
    if (productForm.value.description) productFormData.set('description', productForm.value.description);
    if (productForm.value.category_id) productFormData.set('category_id', productForm.value.category_id);
    if (imageInput.files[0]) productFormData.set('img', imageInput.files[0]);
    
    this.productService.postProduct(productFormData)
      .subscribe((res: HttpResponse<any>) => {
        imageInput.value = '';
        this.productService.setProduct(this.productService.product)
        imageInput.value = '';
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

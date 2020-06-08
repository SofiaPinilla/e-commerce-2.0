import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
public message: string;
imgSrc:string |ArrayBuffer;
  constructor(public productService: ProductService) { }
  ngOnInit(): void {
  }
  readURL(event: any): void {
    if (event.target?.files[0]) {
        const file = event.target.files[0]; 

        const reader = new FileReader();
        reader.onload = e => this.imgSrc = reader.result;

        reader.readAsDataURL(file);
    }
}
  postProduct(productForm, imageInput) { // comentar
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
        this.message = 'product succesfully created';
        setTimeout(() => this.message = "", 2500);
        this.productService.getAll()
          .subscribe(res => {
            this.productService.products = res
          })

        err => console.error(err);
      })
      productForm.reset();
  }
}

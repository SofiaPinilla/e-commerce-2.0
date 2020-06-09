import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products;
  public product;
  public products2;
  public reviews;
  
  review = { };
  constructor(public httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/products');
  }
  getProductId(id: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8000/api/products/id/${id}`);
  }
  getLimitProduct(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/products/8');
  }
  getByPriceAsc(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/products/price');
  }
  getByPriceDesc(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/products/price2');
  }
  searchProduct(search: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8000/api/products/name/${search}`);
  }


  postReview(review: FormData, id:any): Observable<any> {

    return this.httpClient.post(`http://localhost:8000/api/reviews/${id}`, review, {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken') || ''
      }


    });
  }
  postProduct(product: FormData): Observable<any> {
    return this.httpClient.post(`http://localhost:8000/api/products`, product, {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken') || ''
      }
    });
  }
  addLike( id:any): Observable<any> {
    return this.httpClient.post(`http://localhost:8000/api/products/likes/${id}`,{}, {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken') || ''
      }
    });
  }
  deleteLike( id:any): Observable<any> {
    console.log(id)
    return this.httpClient.delete(`http://localhost:8000/api/products/unlike/${id}`,{
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken') || ''
      }
    });
  }
  setReview(review:object) {
    this.review = review;
  }
  setProduct(product) {
    this.product = product;
  }
  editProduct(product: FormData,id): Observable<any> {
    return this.httpClient.put(`http://localhost:8000/api/products/${id}`,product, {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken') || ''
      }
    });
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:8000/api/products/' + id,  {
      headers: {
        authorization: 'Bearer '+ localStorage.getItem('authToken') || ''
      }
    });
  }
}

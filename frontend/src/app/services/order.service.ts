import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public httpClient: HttpClient) { }
  getOrderByUser(token) {
    return this.httpClient.get('http://localhost:8000/api/orders/user', {
      headers:{
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    })
  }
  insert(token, order): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/orders', order, {
      headers:{
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    });
  }
}

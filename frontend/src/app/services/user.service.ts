import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user:object;
  public token: string = "";
  constructor(public httpClient: HttpClient) { }
  setUser(user){
    this.user=user;
  }
  login(user: object): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/users/login', user);
  }
  signup(user:object):Observable<any>{
    return this.httpClient.post('http://localhost:8000/api/users/register',user);
  }
  getUserInfo(token: string): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/users/info',{
      headers:{
        authorization: 'Bearer '+ localStorage.getItem('authToken')
      }
    });
  }
  getCurrentUser(){
      return this.user;
  }
  logout(token: string){
    return this.httpClient.get('http://localhost:8000/api/users/logout',{
      headers: {
        authorization: token
      }
    });
  }
  setToken(token: string): void {
    this.token = token;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private url = "https://reqres.in"; 
  private url1 = "https://fakestoreapi.com";
  
  getSignUpData(data:any){
    return this.http.post(this.url + "/api/register", data);
  }  
  loggedCheck(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url1 + "/products");
  }
}

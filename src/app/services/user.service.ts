import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private url = "https://reqres.in";  
  
  getSignUpData(data:any){
    return this.http.post(this.url + "/api/register", data);
  }  
  loggedCheck(){
    return !!localStorage.getItem('token');
  }
}

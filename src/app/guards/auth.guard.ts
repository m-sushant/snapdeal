import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private httpService:UserService, private router:Router){}
 
  canActivate():boolean|any {
    if(this.httpService.loggedCheck()){
      return true
    }
    else{
      this.router.navigate(['homepage'])
    }
  }
  
}

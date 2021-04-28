import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService,private routers:Router){}
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

  canActivate():boolean{
      if(this.authservice.loggedIn()){
console.log('true')
return true
      }else{
          console.log('false')
          this.routers.navigate(['/login'])
          return false
      }
  }
}

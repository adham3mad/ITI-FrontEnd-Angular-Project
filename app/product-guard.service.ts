import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProductGuardService implements CanActivate{
   constructor(private router:Router){

   }
   canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> | boolean {
            if(localStorage.getItem("token")=='ahmed'){
                return true;
            }else{
                this.router.navigate(['sign-in']);
                return false;
            }
}
}
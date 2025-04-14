import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class signinComponent {
constructor(private _AuthService:AuthService){
  
}
  login(){
    this._AuthService.login()
  }

}

import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent  implements OnInit {
 isSubmitted:boolean=false

 registerForm=new FormGroup({
  title:new FormControl("",Validators.required),
  price:new FormControl("",Validators.required),
  description:new FormControl("",Validators.required),
  image:new FormControl("",Validators.required),
  category:new FormControl("",Validators.required)
})

  constructor(public _StoreService: StoreService) {
    }
 
  ngOnInit(): void {
    
  }
save(){
   
  this._StoreService.AddProduct(this.registerForm.value).subscribe(_response =>{
  this.isSubmitted=true
  this.registerForm.reset()
 })
}

}

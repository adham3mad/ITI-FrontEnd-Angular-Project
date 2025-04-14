import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detiles',
  templateUrl: './detiles.component.html',
  styleUrls: ['./detiles.component.css']
})
export class DetilesComponent implements OnInit {
  
    product:any
    productId:any
    constructor(_StoreService: StoreService,ActivatedRoute:ActivatedRoute) {
      this.productId=ActivatedRoute.snapshot.paramMap.get('id')
      _StoreService.getProductByID(this.productId).subscribe((response): any=> {
        return this.product = response;
      })
  
    }
    
  ngOnInit(): void {
  }


}

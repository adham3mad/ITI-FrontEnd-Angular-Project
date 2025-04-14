import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-womensclothing',
  templateUrl: './womensclothing.component.html',
  styleUrls: ['./womensclothing.component.css']
})
export class WomensclothingComponent {
 womenClothes:any=[]
  constructor(_StoreService: StoreService) {
    _StoreService.getCategoryWomensClothes().subscribe((response: any) => this.womenClothes = response)
  }
  ngOnInit(): void {

  }
}

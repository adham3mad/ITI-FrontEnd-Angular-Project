import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-categoryjewelery',
  templateUrl: './categoryjewelery.component.html',
  styleUrls: ['./categoryjewelery.component.css']
})
export class CategoryjeweleryComponent implements OnInit {
  jewelery:any=[]
  constructor(_StoreService: StoreService) {
    _StoreService.getCategoryJewelery().subscribe((response: any) => this.jewelery = response)
  }
  ngOnInit(): void {

  }
}

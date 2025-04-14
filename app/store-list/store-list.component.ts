import { Component, OnInit } from '@angular/core';
import { StoreService}from'../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  productsArr:any = []
  constructor(_StoreService: StoreService) {
    _StoreService.getAllProducts().subscribe((response: any) => this.productsArr = response)
  }
  ngOnInit(): void {

  }
}

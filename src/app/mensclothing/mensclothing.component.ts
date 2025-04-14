import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-mensclothing',
  templateUrl: './mensclothing.component.html',
  styleUrls: ['./mensclothing.component.css']
})
export class MensclothingComponent {
  mensClothes:any=[]
  constructor(_StoreService: StoreService) {
    _StoreService.getCategoryMensCLothes().subscribe((response: any) => this.mensClothes = response)
  }
  ngOnInit(): void {

  }
}


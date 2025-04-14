import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {
  electronics:any=[]
  constructor(_StoreService: StoreService) {
    _StoreService.getCategoryElectronics().subscribe((response: any) => this.electronics = response)
  }
  ngOnInit(): void {

  }
}

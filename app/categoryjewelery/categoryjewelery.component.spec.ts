import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryjeweleryComponent } from './categoryjewelery.component';

describe('CategoryjeweleryComponent', () => {
  let component: CategoryjeweleryComponent;
  let fixture: ComponentFixture<CategoryjeweleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryjeweleryComponent]
    });
    fixture = TestBed.createComponent(CategoryjeweleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

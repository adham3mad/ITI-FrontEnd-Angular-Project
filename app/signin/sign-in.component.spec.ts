import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signinComponent } from './sign-incomponent';

describe('signinComponent', () => {
  let component: signinComponent;
  let fixture: ComponentFixture<signinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [signinComponent]
    });
    fixture = TestBed.createComponent(signinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

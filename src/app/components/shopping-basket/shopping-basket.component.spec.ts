import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ShoppingBasketComponent } from './shopping-basket.component';

describe('ShoppingBasketComponent', () => {
  let component: ShoppingBasketComponent;
  let fixture: ComponentFixture<ShoppingBasketComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingBasketComponent],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 items after item removed', () => {
    component.items.splice(1, 1)
    expect(component.items.length).toBe(2);
  });
});

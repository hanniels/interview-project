import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomeLayoutComponent } from './userhome-layout.component';

describe('UserhomeLayoutComponent', () => {
  let component: UserhomeLayoutComponent;
  let fixture: ComponentFixture<UserhomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserhomeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

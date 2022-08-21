import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserhomeLayoutComponent } from './layouts/userhome-layout/userhome-layout.component';
import { OrderScreenComponent } from './pages/order-screen/order-screen.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserhomeLayoutComponent,
        OrderScreenComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'interview-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('interview-project');
  });

});

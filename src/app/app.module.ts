import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserhomeLayoutComponent } from './layouts/userhome-layout/userhome-layout.component';
import { OrderScreenComponent } from './pages/order-screen/order-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, UserhomeLayoutComponent]
})
export class AppModule { }

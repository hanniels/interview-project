import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderScreenComponent } from './pages/order-screen/order-screen.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { RouterModule } from '@angular/router';
// import { PaymentModalComponent } from './components/modals/payment-modal/payment-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from "./components/components.module";

@NgModule({
  declarations: [
    AppComponent,
    OrderScreenComponent,
    ShoppingBasketComponent,
    ShoppingItemComponent,
    // PaymentModalComponent,
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

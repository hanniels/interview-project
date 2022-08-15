import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderScreenComponent } from 'src/app/pages/order-screen/order-screen.component';

export const UserHomeLayoutRoutes: Routes = [
  { path: "order-screen", component: OrderScreenComponent },
];

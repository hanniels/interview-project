import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeLayoutRoutes } from './userhome-layout.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(UserHomeLayoutRoutes),
  ]
})
export class UserhomeLayoutModule { }

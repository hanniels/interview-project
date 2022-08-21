import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeLayoutRoutes } from './userhome-layout.routing';
import { RouterModule } from '@angular/router';
import { UserhomeLayoutComponent } from './userhome-layout.component';


@NgModule({
  declarations: [
    UserhomeLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserHomeLayoutRoutes),
  ]
})
export class UserhomeLayoutModule { }

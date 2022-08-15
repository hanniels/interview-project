import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserhomeLayoutComponent } from './layouts/userhome-layout/userhome-layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: UserhomeLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./layouts/userhome-layout/userhome-layout.module").then(m => m.UserhomeLayoutModule)
      }
    ],
  },
  {
    path: "**",
    redirectTo: "dashboard",
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

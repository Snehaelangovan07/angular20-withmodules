import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Admin } from './admin';
import { AdminRoutingModule } from './admin-routing-module';


@NgModule({
  declarations: [Admin],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}

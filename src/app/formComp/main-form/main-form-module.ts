import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainForm } from './main-form';
import { MainFormRoutingModule } from './main-form-routing-module';

@NgModule({
  declarations: [MainForm],
  imports: [
    CommonModule,
    MainFormRoutingModule
  ]
})
export class MainFormModule {}

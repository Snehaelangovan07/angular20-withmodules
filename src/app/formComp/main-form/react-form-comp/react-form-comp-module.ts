import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactFormComp } from './react-form-comp';
import { ReactFormRoutingModule } from './react-form-comp-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ ReactFormComp],
  imports: [
    CommonModule,
    ReactFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactFormCompModule {}

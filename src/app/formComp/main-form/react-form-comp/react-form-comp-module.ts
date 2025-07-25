import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactFormComp } from './react-form-comp';
import { ReactFormRoutingModule } from './react-form-comp-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [ ReactFormComp],
  imports: [
    CommonModule,
    ReactFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()]
})
export class ReactFormCompModule {}

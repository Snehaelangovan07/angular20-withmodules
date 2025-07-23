import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactFormComp } from './react-form-comp';



const routes: Routes = [
  {path: '', component: ReactFormComp}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactFormRoutingModule { }

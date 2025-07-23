import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainForm } from './main-form';

const routes: Routes = [
  { path: '',
  children: [
    { path: 'react-form', loadChildren: () => import('./react-form-comp/react-form-comp-module').then(m => m.ReactFormCompModule) },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainFormRoutingModule { }

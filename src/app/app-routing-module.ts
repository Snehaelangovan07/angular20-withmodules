import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home-module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-module').then((m) => m.AdminModule),
  },
  {
    path: 'main-form',
    loadChildren: () => import('./formComp/main-form/main-form-module').then((m) => m.MainFormModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const main_routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(main_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

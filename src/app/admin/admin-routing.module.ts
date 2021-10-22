import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const admin_routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: '', component: AdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(admin_routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

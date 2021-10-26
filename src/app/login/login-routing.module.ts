import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const login_routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(login_routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

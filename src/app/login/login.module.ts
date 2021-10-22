import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginPageComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

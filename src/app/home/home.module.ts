import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeRoutingModule } from './homepage-routing.module';
import { ProdDetailComponent } from './pages/prod-detail/prod-detail.component';
import { HomepageComponent } from './pages/homepage/homepage.component';



@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProdDetailComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

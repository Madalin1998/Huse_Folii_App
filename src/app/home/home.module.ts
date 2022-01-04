import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeRoutingModule } from './homepage-routing.module';
import { ProdDetailComponent } from './pages/prod-detail/prod-detail.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CosComponent } from './pages/cos/cos.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { BreadcrumbComponent } from './pages/breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProdDetailComponent,
    HomepageComponent,
    CosComponent,
    FavoriteComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

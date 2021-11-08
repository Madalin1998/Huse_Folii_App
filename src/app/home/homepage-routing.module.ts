import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProdDetailComponent } from './pages/prod-detail/prod-detail.component';

const homepage_routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: HomepageComponent },
      { path: 'details', component: ProdDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homepage_routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const homepage_routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: HomepageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(homepage_routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

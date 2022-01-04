import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CosComponent } from './pages/cos/cos.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProdDetailComponent } from './pages/prod-detail/prod-detail.component';

const homepage_routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: HomepageComponent,
        data: {
          location: 'Home'
        } 
      },
      { path: 'details', component: ProdDetailComponent,
        data: {
          location: 'Product details'
        }
      },
      { path: 'cos', component: CosComponent,
        data: {
          location: 'Cos'
        }
      },
      { path: 'favorite', component: FavoriteComponent,
        data: {
          location: 'Favorite'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homepage_routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

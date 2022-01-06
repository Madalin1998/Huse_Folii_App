import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToCos () {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        location: 'Cos de cumparaturi'
      }
    }
    this.route.navigate(["home/cos"], navigationExtras);
  }

  goToFavorite () {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        location: 'Produse favorite'
      }
    }
    this.route.navigate(["home/favorite"], navigationExtras);
  }

}

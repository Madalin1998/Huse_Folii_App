import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToProd() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        location: 'Detaliile produsului'
      }
    }
    this.router.navigate(["home/details"], navigationExtras);
  }

}

import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  public locations = Array();

  constructor(private activatedroute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {
      this.locations[0] = params["location"];
    })
  }

}

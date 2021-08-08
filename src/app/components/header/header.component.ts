import { Component, OnInit } from '@angular/core';

interface Route {
  routeLabel: string;
  routePath: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  routeList: Route[] = [
    { routeLabel: "Battlepass", routePath: "/" },
    { routeLabel: "Personnages", routePath: "/characters" },
    { routeLabel: "Guilde", routePath: "/guild" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

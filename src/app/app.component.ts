import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  currentPage: any;
  title = 'ruta33';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        this.currentPage = event.url;
      }
    });
  }

  ngOnInit():void{
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  cat_slug:any;
  posts:any;
  currentPage:any;

  constructor(
    private _router: Router,
    private _aRoute: ActivatedRoute,
    private _wp: WordpressService,
    private router: Router,
    private _title: Title
  ){

    this.cat_slug = this._aRoute.snapshot.paramMap.get('slug');

    this._wp.getCat( this.cat_slug ).subscribe((data:any)=>{
      this._title.setTitle( data[0].name+' - ' + environment.siteTitle )
    })

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        this.currentPage = event.url;
        this.cat_slug = this._aRoute.snapshot.paramMap.get('slug');
        console.log( this.cat_slug )
        this.loadPosts()
      }
    });
  }

  article( slug:string ){
    return this._router.navigate(['/articulo', slug])
  }

  ngOnInit(): void {
  }

  loadPosts(){
    this._wp.getPostsByCategory( this.cat_slug ).subscribe(data=>{
      this.posts = data;
    })
  }

}

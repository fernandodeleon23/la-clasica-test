import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WordpressService } from 'src/app/services/wordpress.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any;
  post_slug:any;

  constructor(
    private _title: Title,
    private _aRoute: ActivatedRoute,
    private _wp: WordpressService,
    private _seo: SeoService,
    @Inject(PLATFORM_ID) private platformId:any
  ){
    this.post_slug = this._aRoute.snapshot.paramMap.get('slug');
    this.get_the_post( this.post_slug );
  }

  ngOnInit(): void {
  }

  get_the_post( slug:string ){
    this._wp.getPost( slug ).subscribe( data => {
      this.post = data;
      this._title.setTitle( this.post[0].title+' - ' + environment.siteTitle );

      if( isPlatformServer(this.platformId) ){
        this._seo.generateTags({
          title: this.post[0].title,
          description: this.post[0].excerpt,
          image: this.post[0].featured,
          slug: slug
        })
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  posts:any;

  constructor(
    private _router: Router,
    private _wp: WordpressService,
    private _title: Title
  ){
    this._title.setTitle( environment.siteTitle + ' - ' + environment.siteSlogan )
  }

  ngOnInit(): void {
    this._wp.getPosts().subscribe( data =>{
      this.posts = data;
    })
  }

  article( slug:string ){
    return this._router.navigate(['/articulo', slug])
  }

}

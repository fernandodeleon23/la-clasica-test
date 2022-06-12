import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  public baseUrl: string = environment.apiUrl + '/wp-api/get-items.php'

  constructor(
    private _http: HttpClient
  ) { }

  getPosts(){
    return this._http.get( this.baseUrl+'?get=articulos' );
  }

  getPostsByCategory( slug:string ){
    return this._http.get( this.baseUrl+'?get=articulos&cat='+slug )
  }

  getCat( slug: string ){
    return this._http.get( this.baseUrl+'?get=categoria&slug='+slug )
  }

  getPostsByCategoryID( id: number ){
    return this._http.get( this.baseUrl+'?get=posts&category='+id )
  }

  getPost( slug:string ){
    return this._http.get( this.baseUrl+'?get=articulos&slug='+slug )
  }

  getPage( slug: string ){
    return this._http.get( this.baseUrl+'?get=page&slug='+slug )
  }

  getWidgets(){
    return this._http.get( this.baseUrl+'?get=widgets' )
  }
}

import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  widgets:any;

  constructor(
    private _wp: WordpressService
  ) {
    this._wp.getWidgets().subscribe(data=>{
      this.widgets = data
    })
  }

  ngOnInit(): void {
    this.get_sidebar();
  }

  get_sidebar(){
    /*this._wp.getWidgets().subscribe( data => {
      this.widgets = data;
    })*/
  }

}

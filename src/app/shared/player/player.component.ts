import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  isPlaying: boolean = false
  public player = new Audio();
  public stream: string = environment.streamUrl

  constructor() { }

  ngOnInit(): void {
  }

  play(){

    this.player.src = this.stream;
    this.player.load();
    this.player.volume = 1;
    this.player.play();

    this.isPlaying = true
  }

  stop(){
    this.player.load();
    this.isPlaying = false
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MainBannerComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PlayerComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PageComponent } from './page/page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }

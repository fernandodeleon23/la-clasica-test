import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PostComponent,
    NoticiasComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    PostComponent,
    NoticiasComponent
  ]
})
export class BlogModule { }

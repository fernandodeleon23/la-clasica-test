import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './blog/categoria/categoria.component';
import { NoticiasComponent } from './blog/noticias/noticias.component';
import { PostComponent } from './blog/post/post.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PageComponent } from './pages/page/page.component';

const routes: Routes = [
  { path:'', component: InicioComponent, pathMatch: 'full' },
  { path:'contacto', component: ContactoComponent },
  { path:':slug', component: PageComponent},

  // Blog
  { path:'noticias', component: NoticiasComponent },
  { path:'articulo/:slug', component: PostComponent },
  { path:'categoria/:slug', component: CategoriaComponent },
  { path:'**', redirectTo:'', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  {
    //direcionamento das rotas do blog as paginas que irao acessar.
    path:'',
    component:HomeComponent
  },
  {
    //atrves do id se recupera o dado para reinderizar o conteudo na tela como se fosse um banco de dados.
    path:'content/:id',
    component:ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

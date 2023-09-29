import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RistoranteListaComponent } from './ristorante-lista/ristorante-lista.component';

const routes: Routes = [
  {
    path: "ristorante/lista",
    component: RistoranteListaComponent
  },
  {
    path: "ristorante",
    redirectTo: "ristorante/lista"
  },
  {
    path: "",
    redirectTo: "ristorante/lista",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

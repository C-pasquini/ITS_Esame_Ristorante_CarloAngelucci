import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RistoranteListaComponent } from './ristorante-lista/ristorante-lista.component';
import { RistoranteInserisciComponent } from './ristorante-inserisci/ristorante-inserisci.component';

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
  },
  {
    path: "ristorante/nuovo",
    component: RistoranteInserisciComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

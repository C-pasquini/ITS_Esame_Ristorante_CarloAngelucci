import { Component } from '@angular/core';
import { RistoranteService } from '../ristorante.service';
import { Router } from '@angular/router';
import { Ristorante } from '../Ristorante';

@Component({
  selector: 'app-ristorante-inserisci',
  templateUrl: './ristorante-inserisci.component.html',
  styleUrls: ['./ristorante-inserisci.component.css']
})
export class RistoranteInserisciComponent {
  varNome: string | undefined;
  varIndirizzo: string | undefined;
  varTipoCucina: string | undefined;

  constructor(private service: RistoranteService, private router: Router) {

  }

  insertRistorante() {

    let rist: Ristorante = new Ristorante();
    rist.nome = this.varNome;
    rist.indirizzo = this.varIndirizzo;
    rist.tipoCucina = this.varTipoCucina;

    this.service.inserisciRistorante(rist).subscribe(
      (risultato) => {
        if (risultato.status == 'success') {
          alert("Inserimento Avvenuto!!!")

          this.router.navigateByUrl("ristorante/lista")
        }
        else
          alert("Errore")
      },

      (errore) => {
        console.log(errore)
      }
    )
  }
}

import { Component } from '@angular/core';
import { RistoranteService } from '../ristorante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recensione } from '../Recensione';

@Component({
  selector: 'app-ristorante-dettaglio',
  templateUrl: './ristorante-dettaglio.component.html',
  styleUrls: ['./ristorante-dettaglio.component.css']
})
export class RistoranteDettaglioComponent {

  elenco: any = [];

  //Var Ristorante
  varId: string | undefined;
  varNome: string | undefined;
  varIndirizzo: string | undefined;
  varTipoCucina: string | undefined;

  //Var Recensione
  varAutore: string | undefined;
  varTesto: string | undefined;
  varVoto: number | undefined;

  constructor(
    private service: RistoranteService,
    private rottaAttiva: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.rottaAttiva.params.subscribe(
      (parametri) => {
        let ristId = parametri.ristoranteId

        this.service.cercaRistorantePerId(ristId).subscribe(
          (risultato) => {
            this.varId = ristId;
            this.varNome = risultato.ristorante.nome;
            this.varIndirizzo = risultato.ristorante.indirizzo;
            this.varTipoCucina = risultato.ristorante.tipoCucina;

            this.elenco = risultato.recensione
          },
          (errore) => {

          }
        )

      }
    )
  }

  insertRecensione() {
    this.rottaAttiva.params.subscribe(
      (parametri) => {
        let ristId = parametri.ristoranteId


        let rec: Recensione = new Recensione();
        rec.autore = this.varAutore;
        rec.testo = this.varTesto;
        rec.voto = this.varVoto;
        rec.ristoranteId = ristId;

        this.service.inserisciRecensione(rec).subscribe(
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
        //
      }
    )
  }
}

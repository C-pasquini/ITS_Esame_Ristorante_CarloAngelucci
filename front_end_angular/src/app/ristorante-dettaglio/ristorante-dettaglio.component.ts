import { Component } from '@angular/core';
import { RistoranteService } from '../ristorante.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ristorante-dettaglio',
  templateUrl: './ristorante-dettaglio.component.html',
  styleUrls: ['./ristorante-dettaglio.component.css']
})
export class RistoranteDettaglioComponent {
  varId: string | undefined;
  varNome: string | undefined;
  varIndirizzo: string | undefined;
  varTipoCucina: string | undefined;

  constructor(
    private service: RistoranteService, 
    private rottaAttiva: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(){
    this.rottaAttiva.params.subscribe(
      (parametri) => {
        let ristId = parametri.ristoranteId

        this.service.cercaRistorantePerId(ristId).subscribe(
          (risultato) => {
            this.varId = ristId;
            this.varNome = risultato.nome;
            this.varIndirizzo = risultato.indirizzo;
            this.varTipoCucina = risultato.tipoCucina;
          },
          (errore) => {

          }
        )

      }
    )
  }
}

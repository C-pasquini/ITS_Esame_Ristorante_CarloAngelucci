import { Component } from '@angular/core';
import { RistoranteService } from '../ristorante.service';


@Component({
  selector: 'app-ristorante-lista',
  templateUrl: './ristorante-lista.component.html',
  styleUrls: ['./ristorante-lista.component.css']
})
export class RistoranteListaComponent {
  elenco: any = [];

  constructor(private service: RistoranteService) {
    console.log("Sono il costruttore")
  }

  ngOnInit() {
    this.service.cercaTuttiRistoranti().subscribe(
      (risultato) => {
        this.elenco = risultato.data
      },
      (errore) => {

        console.log(errore)
      }
    )

  }
}

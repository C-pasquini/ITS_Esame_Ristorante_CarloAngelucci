import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Risultato } from './Risposta';
import { Ristorante } from './Ristorante';


@Injectable({
  providedIn: 'root'
})
export class RistoranteService {

  private endPointR: string = "http://localhost:4000/api/ristorante"

  constructor(private http: HttpClient) {

  }

  cercaTuttiRistoranti() {
    return this.http.get<Risultato>(this.endPointR)
  }

  inserisciRistorante(objStu: Ristorante) {

    var header_custom = new HttpHeaders();
    header_custom = header_custom.set('Content-Type', 'application/json');

    return this.http.post<Risultato>(this.endPointR, JSON.stringify(objStu), { headers: header_custom })
  }
}

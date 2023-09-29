import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Risultato } from './Risposta';


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
}

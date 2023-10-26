import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Risultato } from './Risposta';
import { Ristorante } from './Ristorante';
import { Recensione } from './Recensione';



@Injectable({
  providedIn: 'root'
})
export class RistoranteService {

  private endPointR: string = "http://localhost:4000/api/ristorante"
  private endPointRc: string = "http://localhost:4000/api/recensione"

  constructor(private http: HttpClient) {

  }

  cercaTuttiRistoranti() {
    return this.http.get<Risultato>(this.endPointR)
  }

  cercaRistorantePerId(varId: string) {
    return this.http.get<Risultato>(`${this.endPointR}/${varId}`)
  }

  inserisciRistorante(objStu: Ristorante) {

    var header_custom = new HttpHeaders();
    header_custom = header_custom.set('Content-Type', 'application/json');

    return this.http.post<Risultato>(this.endPointR, JSON.stringify(objStu), { headers: header_custom })
  }

  inserisciRecensione(objStu: Recensione) {

    //var header_custom = new HttpHeaders();
    //let data = `${window.sessionStorage.getItem("email")}:${window.sessionStorage.getItem("password")}`
    //let buff = Buffer.from(data, "ascii").toString("base64")
    //header_custom = header_custom.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${window.sessionStorage.getItem("email")}:${window.sessionStorage.getItem("password")}`)
      })
    }
    return this.http.post<Risultato>(this.endPointRc, JSON.stringify(objStu), httpOptions)
  }
}

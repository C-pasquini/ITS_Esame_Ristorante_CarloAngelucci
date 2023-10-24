import { HttpClient, HttpHeaders }  from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Risultato } from './Risultato';
import { Login } from './Login';
declare const Buffer: any;

@Injectable({
  providedIn: 'root'
})



export class UtenteService {

  private endPoint: string = "http://localhost:4000/api/utenti/login"
  constructor(private http: HttpClient ) { }

  login(li: Login) {
    var headerCustom = new HttpHeaders();
    let data = `${window.sessionStorage.getItem("email")}:${window.sessionStorage.getItem("password")}`
    let buff = Buffer.from(data, 'base64')

    headerCustom = headerCustom.set('Content-Type', ['application/json', `Authorization: Basic ${buff}`]);

    return this.http.post<Risultato>(this.endPoint, JSON.stringify(li), {headers: headerCustom})
  }
}

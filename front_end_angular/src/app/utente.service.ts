import { HttpClient, HttpHeaders }  from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Risultato } from './Risultato';
import { Login } from './Login';


@Injectable({
  providedIn: 'root'
})



export class UtenteService {

  private endPoint: string = "http://localhost:4000/api/utenti/login"
  private endPoint_Search: string = "/api/utenti/verUser"
  constructor(private http: HttpClient ) { }

  VerificaEsistenzaUtente(email: String | null, password: String | null){
    email = window.sessionStorage.getItem("email")
    password = window.sessionStorage.getItem("password")
    const httpOtions = ({
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    const json_var = {
      email:email,
      password:password
    }
    return this.http.post<Risultato>(this.endPoint_Search, httpOtions)
  }

  login(li: Login) {
    var headerCustom = new HttpHeaders();
    headerCustom = headerCustom.set('Content-Type', 'application/json');

    return this.http.post<Risultato>(this.endPoint, JSON.stringify(li), {headers: headerCustom})
  }
}

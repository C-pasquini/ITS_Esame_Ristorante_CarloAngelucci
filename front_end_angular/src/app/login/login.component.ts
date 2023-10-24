import { Component } from '@angular/core';
import { UtenteService } from '../utente.service';
import { Router } from '@angular/router';
import { Login } from '../Login';
import { Risultato } from '../Risultato';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  varEmail: string | undefined;
  varPassword: string | undefined;
  constructor(private service: UtenteService, private router: Router){}

  accessoUtente() {
    let rist: Login = new Login();
    rist.email = this.varEmail;
    rist.password = this.varPassword;

    this.service.login(rist).subscribe(
      (risultato) => {
        try {
          alert("Sei conesso!")
          window.sessionStorage.setItem("email", rist.email? rist.email : "")
          window.sessionStorage.setItem("password", rist.password? rist.password: "")
          this.router.navigateByUrl("/")
        } catch (error) {
          alert("Errore")
          console.log(error)
        }
        }
    )
  }
}

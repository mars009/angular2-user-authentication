import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string;

  constructor(private auth: AuthService) { }

  onLoginSubmit(credentials) {
    console.log(credentials)
    // call the login method on the AuthService
    // and call finishAuthentication if successful,
    // or display an error if unsuccessful

    this.auth.login(credentials)
      .map(response => response.json()) // we have to get the JSON data out of the response
      .subscribe(
        token => this.auth.finishAuthentication(token),
        error => this.errorMessage = error.json().message // The error case has to be mapped manually
      );
  }

  onSignupSubmit(credentials) {
    // call the signup method on the AuthService
    // and call finishAuthentication if successful,
    // or display an error if unsuccessful
    this.auth.signup(credentials)
      .map(response => response.json()) // we have to get the JSON data out of the response
      .subscribe(
          token => this.auth.finishAuthentication(token),
          error =>  this.errorMessage = error.json().message); // The error case has to be mapped manually
  }

}

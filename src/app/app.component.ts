import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links = {
    login: ['/login'],
    logout: ['/logout']
  };

  constructor(private auth: AuthService) {}

  logout() {    
    localStorage.removeItem('token');
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  counter = 100;

  constructor(private router: Router,
              private authService: AuthService) { }

  increase() {
    if (this.counter < 200 ) {
      this.counter = this.counter + 10;
    }
  }

  decrease() {
    if (this.counter > 0 ) {
      this.counter = this.counter - 10;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}

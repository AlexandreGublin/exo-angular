import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  userLogginIn: IUser = {username: '', password: ''};
  distUser: IUser = {username: '', password: ''};

  constructor(private router: Router,
              private authService: AuthService) {}

  async ngOnInit() {
    this.authService.getDistUser();
    this.authService.distUser.subscribe(
      (distUser: IUser) => this.distUser = distUser);
  }

  ngOnDestroy(): void {
    this.authService.distUser.unsubscribe();
  }

  authenticate(): void {
    if (this.authService.authenticate(this.userLogginIn, this.distUser)) {
      this.router.navigate(['dashboard']);
    }
  }
}

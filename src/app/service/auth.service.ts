import {EventEmitter, Injectable} from '@angular/core';
import {HttpClientService} from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authentificated: boolean;
  distUser = new EventEmitter<IUser>();

  constructor(private httpClientService: HttpClientService) { }

  async getDistUser() {
    return this.httpClientService.get('https://randomuser.me/api/').subscribe((response: IResponse) => {
      if (response &&
        response.results &&
        response.results.length &&
        response.results[0].login
      ) {
        this.distUser.emit({
          username: response.results[0].login.username,
          password: response.results[0].login.password
        });
      }
    });
  }

  isSignedIn(): boolean {
    return this.authentificated;
  }

  authenticate(userLogginIn: IUser, distUser: IUser): boolean {
    this.authentificated = userLogginIn.toString() === distUser.toString();
    return this.authentificated;
  }

  logout(): void {
    this.authentificated = false;
  }
}

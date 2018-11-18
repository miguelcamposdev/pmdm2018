import { Injectable } from '@angular/core';
import { UserLogin } from './user-login.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  login(userLogin: UserLogin) {
    console.log(userLogin);
  }
}

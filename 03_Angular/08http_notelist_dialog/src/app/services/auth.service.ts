import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../dto/login.dto';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';

const authUrl = `${environment.apiUrl}/mynotesapi/auth`;

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // login(param1, param2): tipoQueDevuelveElMetodo
  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${authUrl}/login`, loginDto, requestOptions);
  }

  setLoginData(loginResponse: LoginResponse) {
    localStorage.setItem('token', loginResponse.token);
    localStorage.setItem('username', loginResponse.username);
    localStorage.setItem('email', loginResponse.email);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  /*
  signup(email: string, password: string): string {
    return this.http.post(`${authUrl}/signup`, );
  }
  */
}

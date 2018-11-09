import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
      const loginDto = new LoginDto(this.email, this.password);
      this.authService.login(loginDto).subscribe(loginResp => {
        console.log(loginResp);
        this.authService.setLoginData(loginResp);
        this.router.navigate(['noteadd']);
      }, error => {
        console.log('Error en petición de login');
      }
      );
  }

}

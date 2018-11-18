import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { UserLogin } from 'src/app/session/user-login.interface';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(4)]);


  constructor(private router: Router,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.loginForm = new FormGroup( {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: this.passwordControl,
      repeatPassword: new FormControl('',  [Validators.required, Validators.minLength(4), CustomValidators.equalTo(this.passwordControl)])
    });
  }

  onSubmit() {
    const userLogin: UserLogin = <UserLogin>this.loginForm.value;
    // console.log(userLogin);
    this.sessionService.login(userLogin);
    // this.router.navigate(['/home']);
  }

}

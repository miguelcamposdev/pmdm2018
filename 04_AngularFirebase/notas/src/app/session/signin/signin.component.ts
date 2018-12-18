import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, public auth: AuthService) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )],
      password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    this.router.navigate ( [ '/dashboard' ] );
  }

}

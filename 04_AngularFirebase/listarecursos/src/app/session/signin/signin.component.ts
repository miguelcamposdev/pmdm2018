import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )],
      password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    this.router.navigate ( [ '/dashboard' ] );
  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(userCredential => {
      console.log(userCredential);
    });
  }

  googleLogout() {
    this.afAuth.auth.signOut();
  }

}

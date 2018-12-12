import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialImportModule } from '../material-import.module';
import { RouterModule } from '@angular/router';
import { SessionRoutes } from './session.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
    FlexLayoutModule,
    MaterialImportModule,
    ReactiveFormsModule
  ]
})
export class SessionModule { }

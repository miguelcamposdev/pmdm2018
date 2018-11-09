import { NgModule } from '@angular/core';
import { CommonModule } fwrom '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'notelist', component: NoteListComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

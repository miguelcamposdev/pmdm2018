import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NoteListComponent } from './note-list/note-list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { NoteService } from './services/note.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { NoteAddComponent } from './note-add/note-add.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { DialogNuevaNotaComponent } from './dialog-nueva-nota/dialog-nueva-nota.component';
import { DialogEditNotaComponent } from './dialog-edit-nota/dialog-edit-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    LoginComponent,
    RegisterComponent,
    NoteAddComponent,
    DialogNuevaNotaComponent,
    DialogEditNotaComponent
  ],
  entryComponents: [
    DialogNuevaNotaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatChipsModule,
    MatDialogModule
  ],
  providers: [AuthService, NoteService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }

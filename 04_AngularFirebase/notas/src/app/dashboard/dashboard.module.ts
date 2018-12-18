import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { NoteListComponent } from './note-list/note-list.component';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { NoteFirestoreService } from './services/note-firestore.service';
import { ColorFirestoreService } from './services/color-firestore.service';
import { ColorPipe } from './pipes/color.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  declarations: [ DashboardComponent, NoteListComponent, ColorPipe],
  providers: [ NoteFirestoreService, ColorFirestoreService ]
})

export class DashboardModule {}

import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NoteListComponent } from './note-list/note-list.component';

export const DashboardRoutes: Routes = [{
  path: 'home',
  component: DashboardComponent
},
{
  path: 'notas',
  component: NoteListComponent
}];

import { NgModule } from '@angular/core';
import { DashboardRoutes } from './dashboard.routing';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { MaterialImportModule } from '../material-import.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MaterialImportModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }

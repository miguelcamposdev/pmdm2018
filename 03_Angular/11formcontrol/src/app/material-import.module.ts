import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

const materialModules = [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule
];

@NgModule({
  declarations: [],
  imports: [...materialModules],
  exports: [...materialModules]
})
export class MaterialImportModule { }

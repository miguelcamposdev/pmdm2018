import { Pipe, PipeTransform } from '@angular/core';
import { ColorFirestoreService } from '../services/color-firestore.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  constructor(private db: ColorFirestoreService) {}

  // "colores/1"
  transform(value: any): Observable<any> {
    return this.db.getOne(value);
  }

}

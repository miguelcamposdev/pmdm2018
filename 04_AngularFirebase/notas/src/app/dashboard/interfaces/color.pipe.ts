import { Pipe, PipeTransform } from '@angular/core';
import { ColorFirestoreService } from '../services/color-firestore.service';
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'color'
})
export class DocPipe implements PipeTransform {

  constructor(private db: ColorFirestoreService) {}

  transform(value: any): Observable<any> {
    return this.db.getOne(value);
  }

}
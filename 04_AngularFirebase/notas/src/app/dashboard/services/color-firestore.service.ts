import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CreateNoteDto } from '../note-list/dto/create-note.dto';

const nodeUrl = 'colors';

@Injectable({
  providedIn: 'root'
})
export class ColorFirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  // Obtiene un color
  public getOne(documentId: string) {
    return this.firestore.doc(documentId).snapshotChanges();
  }

  // Obtiene todas las notas
  public getAll() {
    return this.firestore.collection(nodeUrl).snapshotChanges();
  }
}

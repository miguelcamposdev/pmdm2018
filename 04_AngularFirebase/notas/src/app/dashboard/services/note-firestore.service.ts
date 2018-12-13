import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CreateNoteDto } from '../note-list/dto/create-note.dto';

const nodeUrl = 'notes';


@Injectable({
  providedIn: 'root'
})
export class NoteFirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  // Crea una nueva nota
  public create(data: CreateNoteDto) {
    return this.firestore.collection(nodeUrl).add(data);
  }

  // Obtiene una nota
  public getOne(documentId: string) {
    return this.firestore.collection(nodeUrl).doc(documentId).snapshotChanges();
  }

  // Obtiene todas las notas
  public getAll() {
    return this.firestore.collection(nodeUrl).snapshotChanges();
  }

  // Actualiza una nota
  public update(documentId: string, data: any) {
    return this.firestore.collection(nodeUrl).doc(documentId).set(data);
  }
}

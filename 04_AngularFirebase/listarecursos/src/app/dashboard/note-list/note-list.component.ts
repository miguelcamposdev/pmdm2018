import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.itemsCollection = db.collection('/recursos');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
  }

  addNewRecurso() {
    this.db.collection('recursos').add({
      title: 'Inteligencia artificial',
      content: 'Ensayo científico',
      autor: 'Alan Turing',
      anyo: 1912
    })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
        this.items = this.db.collection('/recursos').valueChanges();
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }

}

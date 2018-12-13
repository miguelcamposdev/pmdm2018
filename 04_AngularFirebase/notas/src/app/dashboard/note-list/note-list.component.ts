import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NoteFirestoreService } from '../services/note-firestore.service';
import { Note } from '../interfaces/note.interface';
import { Color } from '../interfaces/color.interface';
import { ColorFirestoreService } from '../services/color-firestore.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  public notes = [];

  constructor(
    public noteService: NoteFirestoreService,
    public colorService: ColorFirestoreService) {
  }

  ngOnInit() {
    this.noteService.getAll().subscribe(notesSnapshot => {
      this.notes = [];
      // Recorro la lista de notas
      notesSnapshot.forEach((note: any) => {
        // Por cada nota que recorro genero un elemento nuevo
        // con el id y los datos de la nota
        const newNote = {
          id: note.payload.doc.id,
          data: note.payload.doc.data()
        };

        this.colorService.getOne(newNote.data.color).subscribe(
          colorSnapshot => {
            newNote.data.color = colorSnapshot.payload.data();
            // añado la nota con su color al listado de notas
            this.notes.push(newNote);
        });
      });
    });
  }

}

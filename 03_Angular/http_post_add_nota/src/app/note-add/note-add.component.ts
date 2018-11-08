import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { NoteCreateDto } from '../dto/note-create.dto';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {
  title: string;
  content: string;
  favourite = false;
  colors: string[] = ['red', 'yellow', 'blue'];
  colorSeleccionado = 'blue';

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  addNote() {
    const noteCreateDto = new NoteCreateDto(this.title, this.content, this.colorSeleccionado, this.favourite);
    this.noteService.createNote(noteCreateDto).subscribe(
      note => {
        console.log(note);
      }
    );
  }

}

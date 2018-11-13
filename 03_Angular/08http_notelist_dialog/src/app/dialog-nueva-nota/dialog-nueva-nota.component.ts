import { Component, OnInit } from '@angular/core';
import { NoteCreateDto } from '../dto/note-create.dto';
import { NoteService } from '../services/note.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-nueva-nota',
  templateUrl: './dialog-nueva-nota.component.html',
  styleUrls: ['./dialog-nueva-nota.component.css']
})
export class DialogNuevaNotaComponent implements OnInit {
  title: string;
  content: string;
  favourite = false;
  colors: string[] = ['red', 'yellow', 'blue'];
  colorSeleccionado = 'blue';

  constructor(private noteService: NoteService,
    public dialogRef: MatDialogRef<DialogNuevaNotaComponent>) { }

  ngOnInit() {
  }

  addNote() {
    const noteCreateDto = new NoteCreateDto(this.title, this.content, this.colorSeleccionado, this.favourite);
    this.noteService.createNote(noteCreateDto).subscribe(
      note => {
        this.dialogRef.close();
      }
    );
  }

}

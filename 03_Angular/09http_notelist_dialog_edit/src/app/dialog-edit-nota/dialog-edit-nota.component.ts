import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from '../services/note.service';
import { Note } from '../interfaces/note.interface';

@Component({
  selector: 'app-dialog-edit-nota',
  templateUrl: './dialog-edit-nota.component.html',
  styleUrls: ['./dialog-edit-nota.component.css']
})
export class DialogEditNotaComponent implements OnInit {
  nota: Note;
  colorSeleccionado: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private noteService: NoteService,
  public dialogRef: MatDialogRef<DialogEditNotaComponent>) { }

  ngOnInit() {
    // Rescatamos el idNota que le pasamos al diálogo en su apertura
    const id = this.data.idNota;

    this.noteService.getNota(id).subscribe(nota => {
      this.nota = nota;
      this.colorSeleccionado = this.nota.color;
    });

  }
  saveNote() {
    this.noteService.updateNota(this.nota).subscribe(nota => {
      this.dialogRef.close();
    });
  }

}

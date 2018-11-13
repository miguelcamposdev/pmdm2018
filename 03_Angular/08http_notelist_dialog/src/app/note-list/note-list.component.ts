import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../interfaces/note.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogNuevaNotaComponent } from '../dialog-nueva-nota/dialog-nueva-nota.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'titulo', 'contenido', 'color', 'fav', 'acciones'];
  dataSource: Note[];

  constructor(private noteService: NoteService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getListaNotas('Listado de notas cargado');
  }

  getListaNotas(mensaje: string) {
    this.noteService.getAllNotas().subscribe(listaNotas => {
      this.dataSource = listaNotas;

      this.snackBar.open(mensaje, 'Cerrar', {
        duration: 3000,
        verticalPosition: 'top'
      });
    }, error =>  {
      this.snackBar.open('Error al obtener notas', 'Cerrar', {
        duration: 3000,
      });
    });
  }

  openDialogNuevaNota() {
    const dialogoNuevaNota = this.dialog.open(DialogNuevaNotaComponent);

    dialogoNuevaNota.afterClosed().subscribe(result => {
      this.getListaNotas('Nota creada');
    });

  }

  eliminarNota(element: Note) {
    this.snackBar.open(`Eliminando ${element.title}`, 'Cerrar', {
      duration: 3000,
    });
  }

}

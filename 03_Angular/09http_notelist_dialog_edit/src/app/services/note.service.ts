import { Injectable } from '@angular/core';
import { NoteCreateDto } from '../dto/note-create.dto';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NoteCreateResponse } from '../interfaces/note-create-response.interface';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Note } from '../interfaces/note.interface';

const noteUrl = `${environment.apiUrl}/mynotesapi/note`;

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  createNote(noteCreateDto: NoteCreateDto): Observable<NoteCreateResponse> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.post<NoteCreateResponse>(`${noteUrl}/create`, noteCreateDto, requestOptions);
  }

  getAllNotas(): Observable<Note[]> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.get<Note[]>(`${noteUrl}/mynotes`, requestOptions);
  }

  getNota(idNota: number): Observable<Note> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.get<Note>(`${noteUrl}/${idNota}`, requestOptions);
  }

  updateNota(nota: Note): Observable<Note> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.put<Note>(`${noteUrl}`, nota, requestOptions);
  }
}

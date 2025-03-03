import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MusicaapiService {
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getTodosProfessor() {
    const res = this.http.get(`${this.url}/professores/todos`, this.httpHeader)
    return res.subscribe(
      res => res,
    );
  }

  getProfessorPorId(id: number) {
    const res = this.http.get(`${this.url}/professores/${id}`, this.httpHeader)
    return res.subscribe(
      res => res,
    );
  }

  getProfessorPorInstrumento(instrumento: string) {
    const res = this.http.get(`${this.url}/professores?nomeinstrumentos=${instrumento}`, this.httpHeader)
    return res
  }
}

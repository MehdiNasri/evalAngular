import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }
  //methode pour aller chercher les films dans l'api json
  getFilms(): Observable<Film[]> {
    // récupération via client Http Angular
    return this.http.get<Film[]>(`${environment.apiUrl}/films`);
  }
   //methode pour aller chercher le film par rapport a son ID dans l'api json
   getFilmById(filmId:number): Observable<Film> {
    // récupération via client Http Angular
    return this.http.get<Film>(`${environment.apiUrl}/films/${filmId}`);
  }
}

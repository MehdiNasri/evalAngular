
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Seance } from '../models/seance';
import { Salle } from '../models/salle';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private http: HttpClient) { }

  //methode pour aller chercher les seances dans l'api json
  getSeances(): Observable<Seance[]> {
    // récupération via client Http Angular
    return this.http.get<Seance[]>(`${environment.apiUrl}/seances`);
  }

  //recupération de la salle par rapport a son ID contenu dans la seance
  getSalleById(salleId:number):Observable<Salle>{
    return this.http.get<Salle>(`${environment.apiUrl}/salles/${salleId}`);
  }
}

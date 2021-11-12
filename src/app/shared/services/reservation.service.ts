import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
//methode pour créer une reservation dans notre db json
createReservation(reservation: Reservation): Observable<Reservation>{
  return this.http.post<Reservation>(`${environment.apiUrl}/reservations`, reservation);
}

//methode pour aller chercher les reservations dans l'api json
getReservations(): Observable<Reservation[]> {
  // récupération via client Http Angular
  return this.http.get<Reservation[]>(`${environment.apiUrl}/reservations`);
}
}

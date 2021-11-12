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
}

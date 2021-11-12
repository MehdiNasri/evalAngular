import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
//methode pour aller chercher les clients dans l'api json
  getClients(): Observable<Client[]> {
    // récupération via client Http Angular
    return this.http.get<Client[]>(`${environment.apiUrl}/clients`);
  }

  //methode pour aller chercher un client par son ID dans l'api json
  getClientById(clientId:number): Observable<Client> {
    // récupération via client Http Angular
    return this.http.get<Client>(`${environment.apiUrl}/clients/${clientId}`);
  }
//methode pour créer un client dans notre db json
  createClient(client: Client): Observable<Client>{
    return this.http.post<Client>(`${environment.apiUrl}/clients`, client);
  }
}

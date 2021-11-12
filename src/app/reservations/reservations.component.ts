import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/models/client';
import { Film } from '../shared/models/film';
import { Reservation } from '../shared/models/reservation';
import { Salle } from '../shared/models/salle';
import { Seance } from '../shared/models/seance';
import { ClientService } from '../shared/services/client.service';
import { FilmService } from '../shared/services/film.service';
import { ReservationService } from '../shared/services/reservation.service';
import { SeanceService } from '../shared/services/seance.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations!:Reservation[]
  constructor(private clientService:ClientService, private seanceService:SeanceService, private filmService: FilmService,private reservationService:ReservationService) { }

  ngOnInit(): void {
    // ALERT INCEPTION ++ 
    this.reservationService.getReservations()
    .subscribe((reservations:Reservation[])=>{
      this.reservations = reservations;
      this.reservations.forEach(item => {
        //recupération du client lié a la reservation
        this.clientService.getClientById(item.idClient)
        .subscribe((client:Client) => {
          item.client = client
        });
        //récupération de la seance lié a la reservation
        this.seanceService.getSeanceById(item.idSeance)
        .subscribe((seance:Seance)=>{
          this.filmService.getFilmById(seance.filmId)
          .subscribe((film:Film)=>{
            seance.film = film;
          })
            //recupération de la salle par son ID injection dans la seance
            this.seanceService.getSalleById(seance.salleId)
            .subscribe((salle:Salle)=>{
              seance.salle = salle
            })
            item.seance = seance
           
         })
         console.log(this.reservations)
     });
    
    })
   
  }

}

import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/models/film';
import { Salle } from '../shared/models/salle';
import { Seance } from '../shared/models/seance';
import { FilmService } from '../shared/services/film.service';
import { SeanceService } from '../shared/services/seance.service';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.scss']
})
export class SeancesComponent implements OnInit {

  seances!: Seance[]
  constructor(private seanceService: SeanceService, private filmService: FilmService) { }

  ngOnInit(): void {
    //ALERT INCEPTION , récupération de toutes les info pour une seance
    this.seanceService.getSeances()
    //recuperation de la liste des seances
      .subscribe((seances: Seance[]) => {
        this.seances = seances
         //on parcours la liste des seances récuperer
         this.seances.forEach(item => {
          //recupération du film par son ID injection dans la seance
          this.filmService.getFilmById(item.filmId)
          .subscribe((film: Film) => {
            item.film = film
          })
          //recupération de la salle par son ID injection dans la seance
          this.seanceService.getSalleById(item.salleId)
          .subscribe((salle:Salle)=>{
            item.salle = salle
          })
        });
      });
            
  }

}

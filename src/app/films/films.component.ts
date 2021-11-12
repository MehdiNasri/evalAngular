import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../shared/models/film';
import { FilmService } from '../shared/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films!:Film[];
  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    //récupération des films depuis le service.
    this.filmService.getFilms()
    .subscribe((films:Film[])=>{
      //initialisation des valeurs recupérer de notre api dans notre variable films
      this.films = films
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/shared/models/film';
import { FilmService } from 'src/app/shared/services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  film!:Film
  constructor(private filmService:FilmService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //recupération du film par rapport a son ID grace au service
    this.filmService.getFilmById(this.route.snapshot.params['id'])
    .subscribe((film:Film)=>{
      //initialisation des données envoyées par le service dans la variable film
      this.film = film
    })
  }

}

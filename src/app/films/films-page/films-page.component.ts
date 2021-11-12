
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss']
})
export class FilmsPageComponent implements OnInit {
  //recupération des films du parent
  @Input() film!:Film

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  //methode pour aller vers le composant film detail
  voirDescription():void{
    //navigation vers le composant en envoyant l'id
    this.router.navigate([`../films/${this.film.id}`])
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seance } from 'src/app/shared/models/seance';

@Component({
  selector: 'app-seances-page',
  templateUrl: './seances-page.component.html',
  styleUrls: ['./seances-page.component.scss']
})
export class SeancesPageComponent implements OnInit {
  //recupération de la seance envoyé par le parent
  @Input() seance!:Seance
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  reserverSeance():void{
    this.router.navigate(['../reservations/create/' + this.seance.id])
  }
}

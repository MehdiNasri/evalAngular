import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from 'src/app/shared/models/reservation';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.scss']
})
export class ReservationsPageComponent implements OnInit {
  @Input() reservation!:Reservation
  constructor() { }

  ngOnInit(): void {
  }

}

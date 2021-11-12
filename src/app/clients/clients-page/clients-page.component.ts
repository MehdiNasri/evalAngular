import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {
  //client recut du parent
  @Input() client!:Client
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/models/client';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  
  clients!: Client[];

  constructor(private clientService : ClientService) { }

  ngOnInit(): void {
    //récupération des clients depuis le service
    this.clientService.getClients()
    .subscribe((
      clients:Client[]
    ) =>{
      this.clients = clients;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { Reservation } from 'src/app/shared/models/reservation';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.scss']
})
export class ReservationCreateComponent implements OnInit {
  reservationForm:FormGroup;
  clients!:Client[];
  ClientReserver!: Client;
  nom!:string
  reservation!:Reservation;
  constructor(private clientService:ClientService,private route:ActivatedRoute) { 
    this.reservationForm = new FormGroup({
      nom: new FormControl(""),
    }
    )
  }

  ngOnInit(): void {
  }
  

  reserverSeance():void{
   
    //recupération de tout les utilisateurs pour trouver celui dont le nom correspond
    this.clientService.getClients()
    .subscribe((clients:Client[])=>{
      this.clients = clients;
      console.log(this.reservationForm.value.nom)
      //filtre de la liste des client pour trouver le bon par rapport au nom envoyé par le form
      this.ClientReserver = this.clients.filter(x => x.nom === this.reservationForm.value.nom)[0];
      console.log(this.ClientReserver)
      this.reservation.idClient = this.ClientReserver.id
      this.reservation.idSeance = this.route.snapshot.params['id'];
      console.log(this.reservation)
    });
   
  }

}

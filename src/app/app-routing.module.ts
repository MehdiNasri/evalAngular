import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientsComponent } from './clients/clients.component';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';
import { FilmsComponent } from './films/films.component';
import { ReservationCreateComponent } from './reservations/reservation-create/reservation-create.component';
import { SeancesComponent } from './seances/seances.component';

//route de l'application
const routes: Routes = [
  {
    path: "clients",
    children: [
      //route vers liste des clients
      { path: "", component: ClientsComponent },
      //route vers l'inscription pour créer un client
      { path: "create", component: ClientCreateComponent }
    ]
  },
  {
    
    path: "films",
    //route vers la liste des films
    children: [
      { path: "", component: FilmsComponent },
      {path:":id",component:FilmDetailComponent}
    ]
  },
  {
    path:"seances",
    children: [
      {path:"",component:SeancesComponent}
    ]
  },
  {
    path:"reservations",
    children:[
      {
        path:"create/:id",component:ReservationCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

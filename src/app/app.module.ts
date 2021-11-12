import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ClientsComponent } from './clients/clients.component';
import { ClientsPageComponent } from './clients/clients-page/clients-page.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { ClientCreateComponent } from './clients/client-create/client-create.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FilmsComponent } from './films/films.component';
import { FilmsPageComponent } from './films/films-page/films-page.component';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';
import { SeancesComponent } from './seances/seances.component';
import { SeancesPageComponent } from './seances/seances-page/seances-page.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationsPageComponent } from './reservations/reservations-page/reservations-page.component';
import { ReservationCreateComponent } from './reservations/reservation-create/reservation-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    ClientsPageComponent,
    ClientCreateComponent,
    FilmsComponent,
    FilmsPageComponent,
    FilmDetailComponent,
    SeancesComponent,
    SeancesPageComponent,
    ReservationsComponent,
    ReservationsPageComponent,
    ReservationCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

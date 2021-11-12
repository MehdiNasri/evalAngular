import { Client } from "./client";
import { Seance } from "./seance";

export interface Reservation {
    idClient:number
    idSeance:number
    client?:Client
    seance?:Seance
}

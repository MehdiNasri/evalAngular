import { Film } from "./film";
import { Salle } from "./salle";

export interface Seance {
    id:number
    salleId:number
    filmId:number
    date:string
    nbPLaces:number
    film:Film,
    salle:Salle
}

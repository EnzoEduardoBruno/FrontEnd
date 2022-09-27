export class Educacion {
    id?: number;
    nombreE: string;
    timeE: string;
    tituloE: string;
    descripcionE: string;

    constructor(nombreE: string, timeE: string, tituloE: string,descripcionE: string){
        this.nombreE = nombreE;
        this.timeE = timeE;
        this.tituloE = tituloE;
        this.descripcionE = descripcionE;
    }
}
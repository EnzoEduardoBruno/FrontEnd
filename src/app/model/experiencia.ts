export class Experiencia {
    id? : number;
    nombreE : string;
    timeE : string;
    puestoE : string;
    descripcionE : string;

    constructor(nombreE: string, timeE: string, puestoE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.timeE = timeE;
        this.puestoE = puestoE;
        this.descripcionE = descripcionE;
    }
}
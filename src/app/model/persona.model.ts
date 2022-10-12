export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    titulo: string;
    img: string;

    constructor(nombre: string, apellido: string, descripcion: string, titulo: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.titulo = titulo;
        this.img = img;
    }
}
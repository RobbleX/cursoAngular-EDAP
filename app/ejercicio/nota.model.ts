

export interface Anotable {
   id:number;
   titulo:string;
   fecha:Date;
   autor:string;
   contenido:any;
}

export class Nota implements Anotable{
   id:number;
   titulo:string;
   fecha:Date;
   autor:string;
   contenido:any;

  constructor(id: number, titulo: string, autor: string, fecha: Date, contenido: any){
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.fecha = fecha;
    this.contenido = contenido;
  }
}

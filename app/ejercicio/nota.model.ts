 

export class Nota {
  private titulo:string;
  private fecha:Date;
  private autor:string;
  private contenido:any;

  constructor(titulo: string, autor: string, fecha: Date, contenido: any){
    this.titulo = titulo;
    this.autor = autor;
    this.fecha = fecha;
    this.contenido = contenido;
  }

  public setTitulo(titulo: string){
    this.titulo = titulo;
  }

  public getTitulo():string{
    return this.titulo;
  }

  public setFecha(fecha:Date)      {
    this.fecha = fecha;
  }

  public getFecha():Date {
    return this.fecha;
  }

  public setAutor(autor:string) {
    this.autor = autor;
  }

  public getAutor():string{
    return this.autor;
  }

  public setContenido(contenido:any) {
    this.contenido = contenido;
  }

  public getContenido():any {
    return this.contenido;
  }
}

import { Component, Injectable, Input , Output, EventEmitter } from '@angular/core';
import { Anotable } from './nota.model';
import { Observable } from 'rxjs/Observable';

let mock_notas: Array<Anotable> =[
  {
    id: 0,
    titulo: "Nota 1",
    autor: "Pepe",
    fecha: new Date(2016,1,12,0,0,0,0),
    contenido: "En un lugar de La Mancha"
  },
  {
    id: 1,
    titulo: "Nota 2",
    autor: "Juan",
    fecha: new Date(2016,1,12,0,0,0,0),
    contenido: "Cuyo nombre no quiero acordarme"
  },
  {
    id: 2,
    titulo: "Nota 3",
    autor: "Lola",
    fecha: new Date(2016,2,12,0,0,0,0),
    contenido: "No ha mucho tiempo que vivía"
  },
  {
    id: 3,
    titulo: "Nota 4",
    autor: "Fulanico",
    fecha: new Date(2016,3,12,0,0,0,0),
    contenido: "Un hidalgo de los de lanza en astiellero"
  },
  {
    id: 4,
    titulo: "Nota 5",
    autor: "Menganico",
    fecha: new Date(2016,6,12,0,0,0,0),
    contenido: "Rocín flaco, aderga antigua y galgo corredor"
  },
  {
    id: 5,
    titulo: "Nota 6",
    autor: "El del butano",
    fecha: new Date(2016,3,12,0,0,0,0),
    contenido: "Una olla algo más de vaca que de carnero"
  },
  {
    id: 6,
    titulo: "Nota 7",
    autor: "La pescatera",
    fecha: new Date(2016,5,12,0,0,0,0),
    contenido: "Salpicón las más noches"
  },
  {
    id: 7,
    titulo: "Nota 8",
    autor: "La chiquilla de la Juani",
    fecha: new Date(2016,1,12,0,0,0,0),
    contenido: "Duelos y quebrantos los sábados"
  }
];

@Injectable()
export class NotaListService{

  constructor () {}

  getNotas(){
    return mock_notas.concat([]);
  }

  getNota(id: number){
    console.log('Get nota ' + id)
    let filtrado = mock_notas.filter(n => n.id === id);
    console.log(id)
    console.log(filtrado)
    return (filtrado.length && filtrado.pop()) || null;
  }
}

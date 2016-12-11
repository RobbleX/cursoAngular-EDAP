import { Component, OnInit } from '@angular/core';
import { Nota } from './nota.model'

@Component({
  selector: 'nota-detail',
  template: `
    <h1> {{nota.titulo}} </h1>
    <p> {{nota.autor}} {{nota.fecha | date:'(dd/MMM/yyyy)'}} </p>
    <p> {{nota.conetnido}}</p>
    <button [routerLink]="'./notaEdit'"></button>
  `
})

export class NotaDetailComponent{
      nota: Nota;
}

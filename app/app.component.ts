import { Component } from '@angular/core';
import { NotaListComponent } from './ejercicio/nota-list.component';
import { Anotable }  from './ejercicio/nota.model';


@Component({
  selector: 'hola-mundo',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent { }

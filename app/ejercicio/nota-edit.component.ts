import { Component, Injectable, OnInit, Input , Output, EventEmitter  } from '@angular/core';
import { Anotable } from './nota.model';
import { NotaListService } from './nota-list.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'nota-edit',
  templateUrl:"./templates/nota-edit.component.html",
  providers: [NotaListService]
})

@Injectable()
export class NotaEditComponent implements OnInit{
  private nota: Anotable;

  constructor(private _notaListService: NotaListService, private _router: Router){

  }

  ngOnInit(){
    this.nota = {
      id: 0,
      titulo: '',
      autor: '',
      fecha: new Date(),
      contenido: ''
    }
  }

  onSubmitEditor(){
    this._notaListService
      .updateNota(this.nota)
      .toPromise()
      .then( result => {
        console.log('Nueva nota creada');
        console.log(result);
        this._router.navigate(['/']);
    })
    .catch(err => console.error(err));
  }
}

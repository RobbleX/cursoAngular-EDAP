import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotaListComponent } from './nota-list.component';
import { NotaEditComponent } from './nota-edit.component';
import { NotaDetailComponent } from './nota-detail.component'

const rutas: Routes = [
  {path: 'notaDetail/:id', component: NotaDetailComponent},
  {path: 'notaEdit/:id', component: NotaEditComponent},
  {path: '', component: NotaListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

export class AppRouterModule{}

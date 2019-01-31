import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from '../usuarios/usuarios-view/usuarios-view.component';
import { UsuariosNewComponent } from '../usuarios/usuarios-new/usuarios-new.component';
import { UsuariosEditComponent } from '../usuarios/usuarios-edit/usuarios-edit.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/new', component: UsuariosNewComponent },
  { path: 'usuarios/edit/:id', component: UsuariosEditComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
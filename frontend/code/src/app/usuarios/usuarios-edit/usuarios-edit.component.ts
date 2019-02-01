import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: []
})
export class UsuariosEditComponent implements OnInit {

  usuarios: Usuarios = new Usuarios();
  display = false;
  id: string;
  test = new Date('2016-01-05T09:05:05.035Z');

  constructor(private route: ActivatedRoute, private location: Location, private usuariosService: UsuariosService) {

  }

  actualizar(usuarios: Usuarios): void {
    console.log(usuarios)
    this.usuariosService.update(usuarios).then(() => this.display = true);
  }

  ngOnInit() {
   
    this.route.params.switchMap((params: Params) => this.usuariosService.getUsuarios(params['id']))
      .subscribe(usuarios => this.usuarios = usuarios);
    
  }

  regresar(): void {
    this.location.back();
  }

  cerrarDialogo(): void {
    this.display = false;
    this.location.back();
  }
}
import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-usuarios-new',
  templateUrl: './usuarios-new.component.html',
  styleUrls: []
})
export class UsuariosNewComponent implements OnInit {

  usuarios: Usuarios;
  display = false;
  isNaN: Function = Number.isNaN;
  constructor(private usuariosService: UsuariosService, private location: Location) { }

  ngOnInit() {
    this.usuarios = new Usuarios();
  }

  guardar(usuarios: Usuarios): void {

    this.usuariosService.create(usuarios);
    this.display = true;

  }

  isNumber(n){

    if(n){
      if(isNaN(parseInt(n))){
        return false;
      }
      return true;
    }
    return false;
  }


  regresar(): void {
    this.location.back();
  }

  cerrarDialogo(): void {
    this.display = false;
    this.location.back();
  }
}
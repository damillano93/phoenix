import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../models/usuarios';
import { Router} from '@angular/router';
import { GlobalsComponent } from '../../globals/globals.component';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios-view.component.html',
  styleUrls: []
})
export class UsuariosComponent implements OnInit {

  usuarioss: Usuarios[];
  usuarios: Usuarios;

  constructor(private usuariosService: UsuariosService,
      private router: Router, private globals: GlobalsComponent,
      private confirmationService: ConfirmationService) {
      this.globals = globals;
  }

  ngOnInit(): void {
    this.usuariosService.getUsuarioss().then(usuarioss => this.usuarioss = usuarioss);
    console.log(this.usuariosService.getUsuarioss().then(usuarioss => this.usuarioss = usuarioss))
  }

  newUsuarios(): void {

    this.router.navigate(['/usuarios/new']).then(() => null);
    this.globals.currentModule = 'Usuarios';
  }

  editar(usuarios: Usuarios): void {
    this.usuarios = usuarios;
    this.router.navigate(['/usuarios/edit', this.usuarios.Id ]);
  }

  borrar(usuarios: Usuarios): void {
    this.confirmationService.confirm({
      message: 'Esta seguro que quiere borrar usuarios?',
      accept: () => {
        console.log(usuarios)
        this.usuariosService.delete(String(usuarios.Id))
          .then(response => this.usuariosService.getUsuarioss().then(usuarioss => this.usuarioss = usuarioss));
      }
    });
  }
}
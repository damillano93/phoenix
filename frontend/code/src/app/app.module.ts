import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsuariosComponent } from './usuarios/usuarios-view/usuarios-view.component';
import { UsuariosNewComponent } from './usuarios/usuarios-new/usuarios-new.component';
import { UsuariosEditComponent } from './usuarios/usuarios-edit/usuarios-edit.component';
import { UsuariosService } from './services/usuarios.service';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { PieComponent } from './pie/pie.component';
import { MigaComponent } from './miga/miga.component';

import { FormsModule } from '@angular/forms'; // Needed to use ngmodel
import { RoutingModule } from './routing/routing.module';
import { HttpModule } from '@angular/http';


// Primeng Modules
import { ButtonModule} from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalsComponent } from './globals/globals.component';


import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

// Others
import { DatePickerModule } from 'bizoru-datepicker';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavegacionComponent,
    ContenidoComponent,
    PieComponent,
    MigaComponent,
    UsuariosComponent,
    UsuariosNewComponent,
    UsuariosEditComponent,
    ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    FormsModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    DialogModule,
    DatePickerModule
  ],
  providers: [
  GlobalsComponent,
  ConfirmationService,
  UsuariosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
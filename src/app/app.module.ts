import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SafeUrlPipe } from './safe-url-pipe'

//material
import { MaterialModule } from './app.materialmodule';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CitasComponent, DialogError } from './components/citas/citas.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ItemsAgendaComponent,DialogContentFirmaDialog,DialogContentFotoDialog } from './components/items-agenda/items-agenda.component';
import { AnamnesisComponent } from './components/anamnesis/anamnesis.component';

//servicios

import { AgendasService } from './services/agendas.service';
import { DatosPrincipalesComponent } from './components/anamnesis/datos-principales/datos-principales.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { InformacionAdicionalComponent } from './components/anamnesis/informacion-adicional/informacion-adicional.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { EstadoCuentaComponent } from './components/pagos/estado-cuenta/estado-cuenta.component';


const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'iniciar_sesion', component: IniciarSesionComponent },
  { path: 'citas', component: CitasComponent }
 
  ];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CitasComponent,
    IniciarSesionComponent,
    ItemsAgendaComponent,
    DialogContentFirmaDialog,
    DialogContentFotoDialog,
    DialogError,
    AnamnesisComponent,
    DatosPrincipalesComponent,
    InformacionAdicionalComponent,
    PagosComponent,
    EstadoCuentaComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ScrollingModule
  ],
  providers: [AgendasService,AnamnesisComponent],
  bootstrap: [AppComponent],
  entryComponents:[ DialogContentFirmaDialog,DialogContentFotoDialog,DialogError ]
})
export class AppModule { }

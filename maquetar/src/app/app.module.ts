import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { RadicacionComponent } from './radicacion/radicacion.component';
import { VerificacionesComponent } from './verificaciones/verificaciones.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { TramitesComponent } from './tramites/tramites.component';
import { AprovacionesComponent } from './aprovaciones/aprovaciones.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { RendimientosComponent } from './rendimientos/rendimientos.component';
import { AutomaticasComponent } from './automaticas/automaticas.component';
import { VisorComponent } from './visor/visor.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    ConsultasComponent,
    RadicacionComponent,
    VerificacionesComponent,
    AsignacionesComponent,
    TramitesComponent,
    AprovacionesComponent,
    CertificadosComponent,
    RendimientosComponent,
    AutomaticasComponent,
    VisorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

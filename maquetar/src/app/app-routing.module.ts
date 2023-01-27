import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovacionesComponent } from './aprovaciones/aprovaciones.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { AutomaticasComponent } from './automaticas/automaticas.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { RadicacionComponent } from './radicacion/radicacion.component';
import { RendimientosComponent } from './rendimientos/rendimientos.component';
import { TramitesComponent } from './tramites/tramites.component';
import { VerificacionesComponent } from './verificaciones/verificaciones.component';
import { VisorComponent } from './visor/visor.component';

const routes: Routes = [
  {path: '', redirectTo: 'Consultas', pathMatch:'full'},
  {path: 'Consultas', component : ConsultasComponent},
  {path: 'Radicacion', component : RadicacionComponent},
  {path: 'Verificaciones', component : VerificacionesComponent},
  {path: 'Asignaciones', component : AsignacionesComponent},
  {path: 'Tramites', component : TramitesComponent},
  {path: 'Aprovaciones', component : AprovacionesComponent},
  {path: 'Certificados', component : CertificadosComponent},
  {path: 'Rendimientos', component : RendimientosComponent},
  {path: 'Automaticas', component : AutomaticasComponent},
  {path: 'VisorGeografico', component : VisorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RdPersonaAdminComponent } from '@component/registro-docente/persona-admin/persona-admin.component';
import { RegistroRealizadoComponent } from '@component/registro-realizado/registro-realizado.component';
import { CdComisionShowComponent } from '@component/consolidado-docente/consolidado-docente/comision-show.component';
import { TomaPosesionAdminComponent } from '@component/toma-posesion/toma-posesion-admin/toma-posesion-admin.component';
import { RabcPersonaAdminComponent } from '@component/registro-abc/persona-admin/persona-admin.component';
import { TomaPosesionRealizadaComponent } from '@component/toma-posesion-realizada/toma-posesion-realizada.component';

const routes: Routes = [
  { path: 'registro-realizado', component: RegistroRealizadoComponent, pathMatch: 'full' },
  { path: 'registro-docente', component: RdPersonaAdminComponent, pathMatch: 'full' },
  { path: '', component: CdComisionShowComponent, pathMatch: 'full' },
  { path: 'consolidado-docente', component: CdComisionShowComponent, pathMatch: 'full' },
  { path: 'toma-posesion', component: TomaPosesionAdminComponent, pathMatch: 'full' },
  { path: 'registro-abc', component: RabcPersonaAdminComponent, pathMatch: 'full' },
  { path: 'toma-posesion-realizada', component: TomaPosesionRealizadaComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

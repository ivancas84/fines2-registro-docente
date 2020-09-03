import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RdPersonaAdminComponent } from '@component/registro-docente/persona-admin/persona-admin.component';
import { RegistroRealizadoComponent } from '@component/registro-realizado/registro-realizado.component';

const routes: Routes = [
  { path: 'registro-realizado', component: RegistroRealizadoComponent, pathMatch: 'full' },
  { path: '**', component: RdPersonaAdminComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

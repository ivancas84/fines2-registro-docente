import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminComponent } from '@component/admin/admin.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Component({
  selector: 'app-rd-persona-admin',
  templateUrl: './persona-admin.component.html',
})
export class RdPersonaAdminComponent extends AdminComponent {

  readonly entityName: string = "registro_docente";

  constructor(
    protected fb: FormBuilder, 
    protected route: ActivatedRoute, 
    protected router: Router, 
    protected location: Location, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService,
    protected storage: SessionStorageService, 
    protected dialog: MatDialog,
    protected snackBar: MatSnackBar
  ) {
    super(fb, route, router, location, dd, storage, dialog, snackBar);
  }

  setData(params: any): void {
    this.data$.next(null);
  }

  reload(response){
    /**
     * Recargar una vez persistido
     */
    this.snackBar.open("Registro realizado", "X");
    this.router.navigateByUrl('/registro-realizado');
  }

  
}


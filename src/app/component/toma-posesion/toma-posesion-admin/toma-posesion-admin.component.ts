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
import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';

@Component({
  selector: 'app-toma-posesion-admin',
  templateUrl: './toma-posesion-admin.component.html',
})
export class TomaPosesionAdminComponent extends AdminComponent {

  readonly entityName: string = "toma_posesion";

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

  setParams(params: any){ 
    if(!params.hasOwnProperty("id")){
      this.snackBar.open("Error de parámetros", "X");
      return;
    }
    this.params = params;
  }

  setData(): void {
      this.data$.next(this.params);
  }

  submit(){
    var s = this.persist().subscribe(
      response => {
        this.reload(response);
      },
      error => { 
        console.log(error);
        this.dialog.open(DialogAlertComponent, {
          data: {title: "Error", message: error.error}
        });
        this.isSubmitted = false;
      }
    );
    this.subscriptions.add(s);
  }


  reload(response){
    if(response) this.router.navigateByUrl('/toma-posesion-realizada');
    else {       
      this.router.navigate(['/registro-abc'], { queryParams: { curso: this.adminForm.get(this.entityName+".id").value, email_abc: this.adminForm.get(this.entityName+".email_abc").value}});
    }
    /**
     * Recargar una vez persistido
     */
    
     //Si existe profe felicitaciones
     //Si no existe profe registrese
  }
}


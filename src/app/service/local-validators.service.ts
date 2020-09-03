import { Injectable } from '@angular/core';
import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalValidators {
  /**
   * Inicialmente se iban a crear funciones independientes para validación
   * Se opto por crear un servicio para poder importar otros servicios necesarios
   */

  constructor(protected dd: DataDefinitionService, protected storage: SessionStorageService) {}

  static cuilDni(): ValidatorFn {
    /**
     * Validar concordancia entre cuil y dni.
     */

    return (control: AbstractControl): ValidationErrors | null => {
      const cuil = control.get("cuil").value;
      const numeroDocumento = control.get("numero_documento").value;
      if(cuil && numeroDocumento){
        const cuil_ = control.get("cuil").value.substring(2,10).replace(/^0+/, '');          
        const numeroDocumento_ = control.get("numero_documento").value.replace(/^0+/, '');
        if(cuil_ != numeroDocumento_) {
          return {cuilDni:true}
        }
      }
      return null
    }
  }
}

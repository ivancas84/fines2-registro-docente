import { PlanDataDefinition } from '@class/data-definition/plan-data-definition';
import { DataDefinition } from '../../core/class/data-definition';

export class _PlanificacionDataDefinition extends DataDefinition {
  entity: string = 'planificacion';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('plan_' in rowCloned)
    ){
      this.stg.setItem('plan' + rowCloned['plan_'].id, rowCloned['plan_']);
      delete rowCloned['plan_'];
    }
    this.stg.setItem("planificacion" + rowCloned.id, rowCloned);
  }

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["anio"]) ret = ret.trim() + " " + row["anio"];

    if (row["semestre"]) ret = ret.trim() + " " + row["semestre"];

    if(row.plan) {
      var e = new PlanDataDefinition(this.stg, this.parser);
      ret = ret.trim() + " " + e.label(row.plan);
    }
    return ret.trim();
  }
}

import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
})
export class ListaAlumnosComponent extends ShowComponent {
  
  entityName: string = "toma";

  ngOnInit(): void { //@override
    console.log("test");
    this.load$ = this.route.queryParams.pipe(
      switchMap(
        queryParams => {
          console.log(queryParams)
          if(!queryParams.hasOwnProperty("id")) {
            this.load = true;
            return of(false);
          }
          this.params = queryParams;
          this.load = false;
          this.initDisplay();

          console.log(this.params);
          return this.initData().pipe(
            map(
              () => {return this.load = true;}
            )
          )
        }
      )
    );
  }

  initData(){ //@override
    return this.setData().pipe(
      map(
        data => {
          console.log(data);
          this.data$.next(data);                
        }
      )
    )
  }

  setData(){ //@override
    return this.dd.get(this.entityName, this.params["id"]);
  }

  
}


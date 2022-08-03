import { Component, Input} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { PorPaisComponent } from '../por-pais/por-pais.component';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  termino: string ='';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  buscar(termino : string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
    .subscribe( (paises) => {
      this.paises = paises;
    }, (err) =>  {
      this.hayError = true;
      this.paises = [];
    });

  }

}

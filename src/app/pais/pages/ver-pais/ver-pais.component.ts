import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService) { } //ActivatedRoute, Sirva para suscribirnos a cualquier cambio de la URL

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe( ({id}) => {
    //   console.log( id );

    //   this.paisService.getPaisPorCod(id).subscribe(pais => {   //Suscribirme para poder tener la información
    //     console.log(pais);
    //   })
    // })

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorCod(id)),
      tap(console.log)
    )
    .subscribe( pais => this.pais = pais[0]);

  }

}

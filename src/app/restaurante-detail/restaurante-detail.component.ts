import { Component, OnInit } from '@angular/core';
import {RestauranteServico} from '../restaurantes/restaurante/restaurante.service';
import {Restaurante} from 'app/restaurantes/restaurante/restaurante.model';
import{ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'mt-restaurante-detail',
  templateUrl: './restaurante-detail.component.html'
})
export class RestauranteDetailComponent implements OnInit {

  constructor(private restauranteServico:RestauranteServico, private route:ActivatedRoute) { }

  restaurante:Restaurante

  ngOnInit() {
    this.restauranteServico.restauranteById(this.route.snapshot.params['id']).subscribe(restaurante => this.restaurante = restaurante)
  }
}
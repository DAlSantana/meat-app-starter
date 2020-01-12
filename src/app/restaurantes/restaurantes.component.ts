import { Component, OnInit } from '@angular/core';
import{Restaurante} from './restaurante/restaurante.model'
import { RestauranteServico } from '../restaurantes/restaurante/restaurante.service'

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurantes:Restaurante[]
  constructor(private restaurantesService:RestauranteServico) { }

  ngOnInit() {
    this.restaurantesService.restaurantes().subscribe(restaurantes => this.restaurantes = restaurantes)
    //Vai receber restaurantes e o que recebe vai pra seu array de restaurantes
    //subscribe vai passar os restaurantes recebidos para a variavel local this.restaurantes.
    //Toda vez que utilizar o observable terá de usar o subscribe
  }
}

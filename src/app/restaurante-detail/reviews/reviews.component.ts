import { Component, OnInit } from '@angular/core';
import {RestauranteServico} from '../../restaurantes/restaurante/restaurante.service'
import {Observable} from 'rxjs/Observable'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews:Observable<any>
  
  constructor(private restauranteServico :RestauranteServico, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restauranteServico.reviewsOfRestaurante(this.route.parent.snapshot.params['id'])
  }
}

import { Component, OnInit } from '@angular/core';
import {RestauranteServico} from '../../restaurantes/restaurante/restaurante.service'
import {Observable} from 'rxjs/Observable'
import {ActivatedRoute} from '@angular/router'
import { MenuItem } from '../menu-item/menu-item.model';
@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu:Observable<MenuItem[]>
  constructor(private restauranteServico: RestauranteServico,private route: ActivatedRoute) { }


  ngOnInit() {
    this.menu = this.restauranteServico.menuOfRestaurante(this.route.parent.snapshot.params['id'])
  }
addMenuItem(item:MenuItem){
  console.log(item)
}
}

import {MEAT_API} from 'app/app.api'
import {ErrorHandler} from '../../app.error-handler'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core'
import{Http} from '@angular/http'
import { Restaurante } from './restaurante.model'
import{Observable} from 'rxjs/Observable'
import { MenuItem } from 'app/restaurante-detail/menu-item/menu-item.model'


@Injectable()
export class RestauranteServico{
    constructor(private http:Http){}

    restaurantes(): Observable<Restaurante[]>{
            return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json()).catch(ErrorHandler.handleError)
    }
    restauranteById(id:string): Observable<Restaurante>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json()).catch(ErrorHandler.handleError)
    }
    reviewsOfRestaurante(id:String): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response =>response.json()).catch(ErrorHandler.handleError)
    }
    
    menuOfRestaurante(id:String):Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json()).catch(ErrorHandler.handleError)
    }

    
}

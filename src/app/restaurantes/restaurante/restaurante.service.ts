import {MEAT_API} from 'app/app.api'
import {ErrorHandler} from '../../app.error-handler'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core'
import{Http} from '@angular/http'
import { Restaurante } from './restaurante.model'
import{Observable} from 'rxjs/Observable'


@Injectable()
export class RestauranteServico{
    constructor(private http:Http){}

    restaurantes(): Observable<Restaurante[]>{
            return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json()).catch(ErrorHandler.handleError)
    }
    restauranteById(id:string): Observable<Restaurante>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json()).catch(ErrorHandler.handleError)
    }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import{ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestauranteServico } from './restaurantes/restaurante/restaurante.service'
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { CarrinhoComprasComponent } from './restaurante-detail/carrinho-compras/carrinho-compras.component'
import { MenuComponent } from './restaurante-detail/menu/menu.component'
import { MenuItemComponent } from './restaurante-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurante-detail/reviews/reviews.component'
import {CarrinhoCompraServico} from './restaurante-detail/carrinho-compras/carrinho-compra.service';
import {OrderComponent} from './order/order.component'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetailComponent,
    CarrinhoComprasComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestauranteServico,CarrinhoCompraServico,{provide:LOCALE_ID,useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

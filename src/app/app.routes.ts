import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component'
import { MenuComponent } from './restaurante-detail/menu/menu.component'
import { ReviewsComponent } from './restaurante-detail/reviews/reviews.component'
import {OrderComponent} from './order/order.component'

export const ROUTES: Routes =[
    {path:'',component:HomeComponent},
    {path:'restaurantes',component:RestaurantesComponent},
    {path:'restaurantes/:id',component:RestauranteDetailComponent,
    children : [
        {path: '',redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu',component:MenuComponent},
        {path: 'reviews', component:ReviewsComponent}
    ]},
    {path: 'order',component:OrderComponent},
    {path:'about',component:AboutComponent}
]


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderService } from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSumaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService, ShoppingCartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

//To make ProductAlertsComponent available to other components in the application, add it to AppModule's declarations in app.module.ts.
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

//Servers often return data in the form of a stream. Streams are useful because they make it easy to transform the returned data and make modifications to the way you request that data. Angular HttpClient is a built-in way to fetch data from external APIs and provide them to your application as a stream.
//This section shows you how to use HttpClient to retrieve shipping prices from an external file.
//The application that StackBlitz generates for this guide comes with predefined shipping data in assets/shipping.json. Use this data to add shipping prices for items in the cart.
//To use Angular's HttpClient, you must configure your application to use HttpClientModule.
//Angular's HttpClientModule registers the providers your application needs to use the HttpClient service throughout your application.
//In app.module.ts, import HttpClientModule from the @angular/common/http package at the top of the file with the other imports. As there are a number of other imports, this code snippet omits them for brevity. Be sure to leave the existing imports in place.
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  //To register Angular's HttpClient providers globally, add HttpClientModule to the AppModule @NgModule() imports array.
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      //In app.module.ts, add a route for product details, with a path of products/:productId and ProductDetailsComponent for the component
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent, //here
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

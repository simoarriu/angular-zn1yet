//Now that you've configured your application to retrieve shipping data, you can create a place to render that data.
import { Component, OnInit } from '@angular/core';

//This section guides you through modifying the ShippingComponent to retrieve shipping data via HTTP from the shipping.json file.
//In shipping.component.ts, import CartService.
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  //Define a shippingCosts property that sets the shippingCosts property using the getShippingPrices() method from the CartService.
  shippingCosts = this.cartService.getShippingPrices();

  //Inject the cart service in the ShippingComponent constructor().
  constructor(private cartService: CartService) {}

  ngOnInit() {}
}

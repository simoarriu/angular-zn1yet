/* 
In Angular, a service is an instance of a class that you can make available to any part of your application using Angular's dependency injection system.

Currently, users can view product information, and the application can simulate sharing and notifications about product changes.

The next step is to build a way for users to add products to a cart. This section walks you through adding a Buy button and setting up a cart service to store information about products in the cart.
*/
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({ providedIn: 'root' })
export class CartService {
  //In the CartService class, define an items property to store the array of the current products in the cart.
  items: Product[] = [];

  //Define methods to add items to the cart, return cart items, and clear the cart items.

  //appends a product to an array of items.
  addToCart(product: Product) {
    this.items.push(product);
  }

  //collects the items users add to the cart and returns each item with its associated quantity.
  getItems() {
    return this.items;
  }

  //returns an empty array of items, which empties the cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

/*
The ProductDetailsComponent handles the display of each product. The Angular Router displays components based on the browser's URL and your defined routes. You'll use the Angular Router to combine the products data and route information to display the specific details for each product.
*/

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  //Define the product property.
  product: Product | undefined;

  /*Inject ActivatedRoute into the constructor() by adding private route: ActivatedRoute as an argument within the constructor's parentheses. 

  ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute contains information about the route and the route's parameters.

  By injecting ActivatedRoute, you are configuring the component to use a service*/
  constructor(private route: ActivatedRoute) {}

  //In the ngOnInit() method, extract the productId from the route parameters and find the corresponding product in the products array.
  ngOnInit() {
    // First get the product id from the current route.
    // The route parameters correspond to the path variables you define in the route. To access the route parameters, we use route.snapshot, which is the ActivatedRouteSnapshot that contains information about the active route at that particular moment in time. The URL that matches the route provides the productId . Angular uses the productId to display the details for each unique product.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}

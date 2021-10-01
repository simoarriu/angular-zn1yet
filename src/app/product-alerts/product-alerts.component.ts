import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
//Input is necessary so set up ProductAlertsComponent to receive product data, such as the price in order to do some checks

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  /*
  In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator. The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  */

  @Input() product!: Product;

  /*
  In the component class, define a property named notify with an @Output() decorator and an instance of EventEmitter(). Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
  */
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}

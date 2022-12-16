import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  // Store the Order Model
  order: Order = new Order();

  // Inject OrderService to Use the getNewOrderForCurrentUser
  constructor( private orderService: OrderService, private router: Router ) { }

  ngOnInit(): void {
    // Call the Method and Subscribe
    this.orderService.getNewOrderForCurrentUser().subscribe({
      next:(order) => {
        // Happy part -- Getting the Order Details
        this.order = order;
      },
      // Error OR Bad Request
      error:() => {
        // Re-direct the User
        this.router.navigateByUrl('/checkout')
      }
    })
  }

}

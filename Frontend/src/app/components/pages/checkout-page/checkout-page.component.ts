import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  // Store the Order Model
  order: Order = new Order();

  // The Checkout Form
  checkoutForm!: FormGroup;

  constructor( private cartService: CartService, private formBuilder: FormBuilder,
                private userService:UserService ) { 
                      // Get the Cart from CartService and Set it to Order
                      // here, We dont want Observable Because we Only want the Latest Values Directly
                        const cart = this.cartService.getCart();
                        this.order.items = cart.items;
                        this.order.totalPrice = cart.totalPrice;
                      }

  ngOnInit(): void {
    // Creating the Form
    let {name, address} = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      address: [address, Validators.required]
    })
  }

  // the Getter for Checkout form
  get fc() {
    return this.checkoutForm.controls;
  }

  // CreateOrder Function 
  createOrder() {
      if(this.checkoutForm.invalid) {
      // show Warning Message
      alert("Please fill the inputs...");
      return;
      }
    //  Checkout Form is Valid
    // set the Value To Send to Server 
      this.order.name = this.fc.name.value;
      this.order.address = this.fc.address.value;
      console.log(this.order); 
  }

}

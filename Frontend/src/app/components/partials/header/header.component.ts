import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch, faShoppingBasket, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // To Store the Change in the Cart Section
  cartQuantity = 0;

  // Store the DropDown Icon
  dropDownIcon = faCaretDown;

  // To Store the Searched Term
  searchTerm = '';

  // Store Search Icon
  searchIcon = faSearch;

  // Store Basket Icon
  basketIcon = faShoppingBasket;

  // Inject two Dependencies For the Searched Input
  constructor( private activatedRoute: ActivatedRoute,
    private router: Router, 
    // Inject CartService to Change the header Cart Quantity
    private cartService: CartService ) {
      this.activatedRoute.params.subscribe( (params) => {
        if(params.searchTerm) {
          this.searchTerm = params.searchTerm;
        }
      })
    }

  ngOnInit(): void {
    // Update the cart
    this.cartService.getCartObservable().subscribe( (newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
  }

   // To show the Searched Results
  search(term: string) {
    if(term) {
      this.router.navigateByUrl('/search/' + term)
    }
  }

}

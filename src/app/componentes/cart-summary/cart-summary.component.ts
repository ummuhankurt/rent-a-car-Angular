import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetailDto/cardetail';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from '../../models/cartItems/cartItems';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];
  constructor(private cartService : CartService , private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }


  getCart(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(car : CarDetail){
    this.cartService.removeFromCart(car);
  }
}

import { Injectable } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetailDto/cardetail';
import { cartItems } from 'src/app/models/cart/cart';
import { CartItem } from 'src/app/models/cartItems/cartItems';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  addToCart(car : CarDetail){
    let item = cartItems.find(c => c.car.id === car.id);
    if(item){
      item.quantity +=1;
    }
    else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      cartItems.push(cartItem);
    }
  }
  list() : CartItem[]{
    return cartItems;
  }

  
  removeFromCart(car : CarDetail){
    let item = cartItems.find(c => c.car.id === car.id);
    if(item){
      if(item.quantity > 1){
        item.quantity -= 1;
      }
      else{
        cartItems.splice(cartItems.indexOf(item),1)
      }
    }
    
  }
  
  
}


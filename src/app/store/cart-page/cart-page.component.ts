import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
 
})
export class CartPageComponent implements OnInit {

  public cart: Cart = new Cart();// Novo carrinho criado

  constructor() { }

  ngOnInit() {

    this.loadCart(); // Carga da página do carrinho
  }

  public loadCart(){
    this.cart = CartUtil.get();
  }

  public remove(item: any){
    let index = this.cart.items.indexOf(item);
    this.cart.items.splice(index,1);
    CartUtil.update(this.cart);
  }

}

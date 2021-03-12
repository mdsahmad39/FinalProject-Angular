import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsCart: any = [];
  private productsInCart = new BehaviorSubject([]);
  productInCart$ = this.productsInCart.asObservable();

  constructor(public httpClient: HttpClient) { }

  addProductToCart(product: any) {
    if (this.productsCart.includes(product)) {
      this.productsCart[this.productsCart.indexOf(product)].count += 1;
    } else {
      product['count'] = 1;
      this.productsCart.push(product);
    }
  }

  setProductInCart(product: any) {
    this.addProductToCart(product);
    this.productsInCart.next(this.productsCart);
  }

  getProductsInCart(): any {
    return this.productInCart$;
  }

  placeOrder(orders: any): any {
    return this.httpClient.post('registerOrder', orders);
  }
}

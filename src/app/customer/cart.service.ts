import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private productsInCart = new BehaviorSubject<Array<any>>([]);
  productsCart: any[]=[];

  constructor(public httpClient: HttpClient) {}

  addProductToCart(product: any) {
      //this.productsCart[this.productsCart.indexOf(product)].count += 1;
      //} else {
      //product['count'] = 1;
      const currentValue = this.productsInCart.value;
      const updatedValue = [...currentValue, product];
      this.productsInCart.next(updatedValue);
      this.productsCart.push(product);  
  }

  setProductInCart() {
    //this.productsInCart.next(this.productsCart);
  }

  getProductsInCart(): any {
    return this.productsInCart.asObservable();
  }

  placeOrder(orders: any): any {
    return this.httpClient.post('registerOrder', orders);
  }
}

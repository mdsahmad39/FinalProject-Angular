import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from 'src/app/seller/seller.service';
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  cartProductsList:any[]=[];
  totalPrice: number = 0;
  countEdit: number = 0;
  myOrder: any;

  constructor(public customerService: CustomerService, public router: Router, public sellerService: SellerService, public cartService: CartService) {

  }

  // refresh(prod: any) {
  //   if (this.cartProductsList.includes(prod)) {
  //     this.cartProductsList[this.cartProductsList.indexOf(prod)].listPrice = prod.purchasedQuantity * prod.price;
  //     this.totalPriceFinal();
  //   }
  // }

  // totalPriceFinal() {
  //   this.totalPrice = 0;
  //   for (var prod of this.cartProductsList) {
  //     this.totalPrice += prod.listPrice;
  //   }
  // }

  ngOnInit(): void {
    this.cartService.getProductsInCart().subscribe((result:any) => {for(var res of result ){this.cartProductsList.push(res)};});
    console.log(this.cartProductsList);
  }

  placeOrder(): any {
    // let todayDate = new Date();
    // this.myOrder = {
    //   orderStatus: `Order placed successfully, you're will be reached within 3 hours`,
    //   orderDate: todayDate.getDate() + "-" + todayDate.getMonth() + "-" + todayDate.getFullYear(),
    //   store: this.customerService.getSellerProfile(),
    //   customer: this.customerService.getCustomerProfile(),
    //   orderDetails: {
    //     purchasedQuantity: this.cartProductsList[0].purchasedQuantity,
    //     totalPrice: this.totalPrice,
    //     orders: this.myOrder,
    //     product: this.cartProductsList[0]
    //   }
    // };
    // this.customerService.placeOrder(this.myOrder).subscribe((data: any) => console.log(data));
    // this.router.navigate(['orderPlaced']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/seller/seller.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  allProducts: any[] = [];
  cartProductsList: any[] = [];
  additionalProductsList: any[] = [];
  finalOrdersList: any[] = [];
  totalPrice: number = 0;
  purchasedQuantity: any;

  constructor(public customerService: CustomerService, public router: Router, public sellerService: SellerService) {
    this.purchasedQuantity = 1;
  }

  ngOnInit(): void {
    this.cartProductsList = this.customerService.getProductsInCart();

    for (var product of this.cartProductsList) {
      this.totalPrice += product.price;
      console.log(product.price);
    }
    console.log(this.totalPrice);

    // this.sellerService.getAllproducts(this.customerService.getSellerId()).subscribe((data: any) => {
    //   // this.allProducts = data;
    //   for (var product of data) {
    //     this.allProducts.push(product);
    //     if (!this.cartProductsList.includes(product)) {
    //       this.additionalProductsList.push(product);
    //     }
    //   }
    // });

    // console.log(this.allProducts);

    // // for (var product of this.allProducts) {
    // //   console.log(product);
    // //   if (!this.cartProductsList.includes(product)) {
    // //     this.additionalProductsList.push(product);
    // //   }
    // // }
    // console.log(this.additionalProductsList);
  }

}

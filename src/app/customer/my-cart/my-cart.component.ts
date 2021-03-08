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
  orderDetails:any[]=[];
  totalPrice: number = 0;

  constructor(public customerService: CustomerService, public router: Router, public sellerService: SellerService) {

    for (var product of this.cartProductsList) {
      product.listPrice=product.purchasedQuantity*product.price;
      this.totalPrice += product.Price;
      console.log(product.price);
    }
    console.log(this.totalPrice);
  }

  refresh(prod : any)
  {
    if(this.cartProductsList.includes(prod))
    {
      this.cartProductsList[this.cartProductsList.indexOf(prod)].listPrice=prod.purchasedQuantity*prod.price;
      this.totalPriceFun();
    }
  }

  totalPriceFun()
  {
    this.totalPrice=0;
    for(var prod of this.cartProductsList)
    {
      this.totalPrice+=prod.listPrice;
    }
  }

  ngOnInit(): void {
    this.cartProductsList = this.customerService.getProductsInCart();

    /*for (var product of this.cartProductsList) {
      product['purchasedQuantity']='1';
      product['listPrice']=product.purchasedQuantity*product.price;
      this.totalPrice += product.price;
      console.log(product.price);
    
    console.log(this.totalPrice);*/

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

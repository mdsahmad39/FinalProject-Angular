import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/seller/seller.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-store-display',
  templateUrl: './store-display.component.html',
  styleUrls: ['./store-display.component.css']
})
export class StoreDisplayComponent implements OnInit {

  store: any;
  productsList: any;
  imagePath: any;
  constructor(public customerService: CustomerService, public sellerService: SellerService, public router: Router) { }

  ngOnInit(): void {
    this.store = this.customerService.getSellerProfile();
    this.sellerService.getAllproducts(this.store.storeId).subscribe((data: any) => {
      this.productsList = data;
    });
    this.imagePath = '../../assets/images/eggs.jpg';
  }

  addToCart(product: any) {
    product['purchasedQuantity']="1";
    product['listPrice']=product.price;
    this.customerService.setProductInCart(product);
  }

  checkOut() {
    this.router.navigate(['myCart']);
  }

}

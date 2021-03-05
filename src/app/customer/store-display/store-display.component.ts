import { Component, OnInit } from '@angular/core';
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
  constructor(public customerService: CustomerService, public sellerService: SellerService) { }

  ngOnInit(): void {
    this.store = this.sellerService.getSellerProfile();
    this.sellerService.getAllproducts(this.store.storeId).subscribe((data: any) => {
      this.productsList = data, console.log(data);
    });
    this.imagePath = '../../assets/images/eggs.jpg';
  }

}

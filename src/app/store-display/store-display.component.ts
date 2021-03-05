import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-display',
  templateUrl: './store-display.component.html',
  styleUrls: ['./store-display.component.css']
})
export class StoreDisplayComponent implements OnInit {

  store: any;
  productList: any;
  constructor(public customerService: CustomerService, public storeService: StoreService) { }

  ngOnInit(): void {
    this.store = this.storeService.getSellerProfile();
    console.log(this.storeService.getSellerProfile());
    console.log(this.store);
  }

}

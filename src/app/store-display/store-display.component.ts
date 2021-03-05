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
  productsList: any;
  imagePath:any;
  constructor(public customerService: CustomerService, public storeService: StoreService) { }

  ngOnInit(): void {
    this.store = this.storeService.getSellerProfile();
    this.storeService.getAllproducts(this.store.storeId).subscribe((data: any) => {
      this.productsList = data, console.log(data);
    });
    this.imagePath = '../../assets/images/eggs.jpg';
  }

}

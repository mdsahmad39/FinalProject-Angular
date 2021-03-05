import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer/customer.service';
import { SellerService } from 'src/app/seller/seller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  customerStatus: boolean;
  sellerStatus: boolean;

  constructor(public customerService: CustomerService, public sellerService: SellerService) {
    this.customerStatus = true;
    this.sellerStatus = false;
  }

  ngOnInit(): void {
    this.customerStatus = this.customerService.getCustomerLoggedStatus();
    this.sellerStatus = this.sellerService.getSellerLoggedStatus();
  }

}

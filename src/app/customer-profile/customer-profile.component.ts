import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  customer: any;
  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customer = this.customerService.getCustomerProfile();
  }

}

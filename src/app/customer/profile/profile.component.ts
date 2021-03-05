import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: any;
  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customer = this.customerService.getCustomerProfile();
  }

}

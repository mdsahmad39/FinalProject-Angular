import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class CustDashboardComponent implements OnInit {

  storesList: any;
  imagePath:any;
  constructor(public customerService: CustomerService, public storeService: StoreService, public router: Router) { }

  ngOnInit(): void {
    this.storesList = this.customerService.getAllStores().subscribe((data: any) => { this.storesList = data, console.log(data); });
    this.imagePath = '../../assets/images/store_image.png';
  }

  goToStore(store: any): void {
    this.storeService.setSellerProfile(store);
    console.log(store);
    this.router.navigate(['storeDisplay']);
  }

}

import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  productsList: any;
  constructor(public storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getAllproducts(this.storeService.getSellerId()).subscribe((data: any) => this.productsList = data);
  }

}

import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.css']
})
export class StoreProfileComponent implements OnInit {

  seller: any;
  constructor(public storeService: StoreService) { }

  ngOnInit(): void {
    this.seller = this.storeService.getSellerProfile();
  }

}

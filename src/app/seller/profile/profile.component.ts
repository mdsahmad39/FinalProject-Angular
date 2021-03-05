import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class SellerProfileComponent implements OnInit {

  seller: any;
  constructor(public sellerService: SellerService) { }

  ngOnInit(): void {
    this.seller = this.sellerService.getSellerProfile();
  }
}

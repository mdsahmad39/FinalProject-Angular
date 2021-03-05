import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {

  seller: any;
  constructor(public storeService: StoreService, public router: Router) { }

  ngOnInit(): void {
  }

  async submitLoginForm(loginForm: any) {
    if (loginForm.loginId === 'admin' && loginForm.password === 'admin') {
      this.router.navigate(['adminDashboard']);
    } else {
      await this.storeService.loginSeller(loginForm).toPromise().then((data: any) => { this.seller = data; });
      if (this.seller) {
        this.storeService.setSellerLoggedIn();
        this.storeService.setSellerId(this.seller.storeId);
        this.storeService.setSellerProfile(this.seller);
        this.router.navigate(['dashboard_seller']);
      } else {
        alert("login failed, Please register in next page for able use this Application");
        this.router.navigate(['register_store']);
      }
    }
  }

}

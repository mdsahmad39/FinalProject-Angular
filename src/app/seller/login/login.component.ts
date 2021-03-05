import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class SellerLoginComponent implements OnInit {

  seller: any;
  constructor(public sellerService: SellerService, public router: Router) { }

  ngOnInit(): void {
  }

  async submitLoginForm(loginForm: any) {
    if (loginForm.loginId === 'admin' && loginForm.password === 'admin') {
      this.router.navigate(['adminDashboard']);
    } else {
      await this.sellerService.loginSeller(loginForm).toPromise().then((data: any) => { this.seller = data; });
      if (this.seller) {
        this.sellerService.setSellerLoggedIn();
        this.sellerService.setSellerId(this.seller.storeId);
        this.sellerService.setSellerProfile(this.seller);
        this.router.navigate(['dashboard_seller']);
      } else {
        alert("login failed, Please register in next page for able use this Application");
        this.router.navigate(['register_store']);
      }
    }
  }

}

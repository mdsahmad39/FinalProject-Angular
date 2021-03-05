import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer: any;
  constructor(public customerService: CustomerService, public router: Router) { }

  ngOnInit(): void {
  }

  async submitLoginForm(loginForm: any) {
    if (loginForm.loginId === 'admin' && loginForm.password === 'admin') {
      this.router.navigate(['adminDashboard']);
    } else {
      await this.customerService.loginCustomer(loginForm).toPromise().then((data: any) => { this.customer = data; });
      if (this.customer) {
        this.customerService.setCustomerLoggedIn();
        this.customerService.setCustomerId(this.customer.storeId);
        this.customerService.setCustomerProfile(this.customer);
        this.router.navigate(['dashboard_customer']);
      } else {
        alert("login failed, Please register in next page for able use this Application");
        this.router.navigate(['register_store']);
      }
    }
  }

}

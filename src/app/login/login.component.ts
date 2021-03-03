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
      this.customerService.setCustomerLoggedIn();
      this.router.navigate(['dashboard']);
    } else {
      await this.customerService.loginCustomer(loginForm).toPromise().then((data: any) => { this.customer = data; });
      if (this.customer) {
        alert("login Scuucess");
        this.customerService.setCustomerLoggedIn();
        this.router.navigate(['dashboard']);
      } else {
        alert("login failed, Please register in next page for able use this Application");
        this.router.navigate(['registration']);
      }
    }
  }

}

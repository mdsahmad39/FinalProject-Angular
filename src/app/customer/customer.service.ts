import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SellerService } from '../seller/seller.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  customer: any;
  seller: any;
  productsList: any = [];

  constructor(public httpClient: HttpClient, public router: Router, public sellerService: SellerService) {
  }

  get isCustomerLoggedIn() {
    return this.customerLoggedIn.asObservable();
  }

  async loginCustomer(loginForm: any) {
    await this.httpClient.get('login_customer/' + loginForm.loginId + '/' + loginForm.password).toPromise().then((data: any) => { this.customer = data; });
    if (this.customer) {
      this.customerLoggedIn.next(true);
      this.router.navigate(['dashboardCustomer']);
    }
  }

  logoutCustomer() {
    this.customerLoggedIn.next(false);
    this.router.navigate(['']);
  }

  getCustomerId(): any {
    return this.customer.userId;
  }

  getCustomerProfile(): any {
    return this.customer;
  }

  setSellerProfile(seller: any) {
    this.seller = seller;
  }

  getSellerProfile() {
    return this.seller;
  }

  getSellerId() {
    return this.seller.storeId;
  }

  register(registerForm: any) {
    return this.httpClient.post('register_customer', registerForm);
  }

  getAllStores(): any {
    return this.httpClient.get('getAllStores');
  }

  updateCustomer(customer: any): any {
    return this.httpClient.post('updateCustomer', customer);
  }

  setProductInCart(product: any) {
    this.productsList.push(product);
  }

  getProductsInCart(): any {
    return this.productsList;
  }

  getAllProducts(): any {
    this.sellerService.getAllproducts(this.seller.storeId).subscribe((data: any) => { this.productsList = data; });
    console.log(this.productsList);
  }

}

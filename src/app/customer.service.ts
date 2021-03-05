import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public isCustomerLogged: boolean;
  customerId: any;
  customerProfile: any;

  constructor(public httpClient: HttpClient) {
    this.isCustomerLogged = false;
  }

  setCustomerLoggedIn(): void {
    this.isCustomerLogged = true;
  }

  setCustomerLoggedOut(): void {
    this.isCustomerLogged = false;
  }

  getCustomerLoggedStatus(): any {
    return this.isCustomerLogged;
  }

  setCustomerId(id: any): void {
    this.customerId = id;
  }

  getCustomerId(): any {
    return this.customerId;
  }

  setCustomerProfile(profile: any): void {
    this.customerProfile = profile;
  }

  getCustomerProfile(): any {
    return this.customerProfile;
  }

  loginCustomer(loginForm: any) {
    return this.httpClient.get('login_customer/' + loginForm.loginId + '/' + loginForm.password);
  }

  register(registerForm: any) {
    return this.httpClient.post('register_customer', registerForm);
  }

  getAllStores(): any {
    return this.httpClient.get('getAllStores');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public isCustomerLogged: boolean;

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

  loginCustomer(loginForm: any) {
    return this.httpClient.get('login_customer/' + loginForm.loginId + '/' + loginForm.password);
  }

  register(registerForm: any) {
    return this.httpClient.post('register_customer', registerForm);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  isSellerLoggedIn: boolean;

  constructor(public httpClient: HttpClient) {
    this.isSellerLoggedIn = false;
  }

  setSellerLoggedIn(): void {
    this.isSellerLoggedIn = true;
  }

  setSellerLoggedOut(): void {
    this.isSellerLoggedIn = false;
  }

  getSellerLoggedStatus(): boolean {
    return this.isSellerLoggedIn;
  }

  loginSeller(loginForm: any) {
    return this.httpClient.get('login_store/' + loginForm.loginId + '/' + loginForm.password);
  }

  register(registerForm: any) {
    return this.httpClient.post('register_store', registerForm);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  isSellerLoggedIn: boolean;
  sellerId: any;
  sellerProfile: any;

  constructor(public httpClient: HttpClient) {
    this.isSellerLoggedIn = false;
    this.sellerId = 0;
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

  setSellerId(id: any): void {
    this.sellerId = id;
  }

  getSellerId(): any {
    return this.sellerId;
  }

  setSellerProfile(profile: any): void {
    this.sellerProfile = profile;
  }

  getSellerProfile(): any {
    return this.sellerProfile;
  }

  loginSeller(loginForm: any) {
    return this.httpClient.get('login_seller/' + loginForm.loginId + '/' + loginForm.password);
  }

  register(registerForm: any) {
    return this.httpClient.post('register_store', registerForm);
  }

  getAllproducts(storeId: any) {
    return this.httpClient.get('get_products_by_store/' + storeId);
  }
}

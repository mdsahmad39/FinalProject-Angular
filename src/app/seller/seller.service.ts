import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private sellerLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sellerId: any;
  seller: any;

  constructor(public httpClient: HttpClient, public router: Router) {
    this.sellerId = 0;
  }

  get isSellerLoggedIn() {
    return this.sellerLoggedIn.asObservable();
  }

  async loginSeller(loginForm: any) {
    await this.httpClient.get('login_seller/' + loginForm.loginId + '/' + loginForm.password).toPromise().then((data: any) => { this.seller = data; });
    if (this.seller) {
      this.sellerLoggedIn.next(true);
      this.router.navigate(['dashboardSeller']);
    }
  }

  logoutSeller(): any {
    this.sellerLoggedIn.next(false);
    this.router.navigate(['']);
  }


  getSellerId(): any {
    return this.seller.storeId;
  }

  getSellerProfile(): any {
    return this.seller;
  }

  register(registerForm: any) {
    return this.httpClient.post('register_store', registerForm);
  }

  getAllproducts(storeId: any) {
    return this.httpClient.get('get_products_by_store/' + storeId);
  }

  updateProduct(product: any): any {
    return this.httpClient.post('updateProduct/', product);
  }

  addProduct(product: any): any {
    return this.httpClient.post('addProduct/', product);
  }

  deleteProduct(product: any): any {
    return this.httpClient.post('deleteProduct/', product);
  }
}

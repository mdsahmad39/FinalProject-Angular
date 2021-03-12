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
  newFileName:any

  constructor(public httpClient: HttpClient, public router: Router) {
    this.sellerId = 0;
  }

  get isSellerLoggedIn() {
    return this.sellerLoggedIn.asObservable();
  }

  async loginSeller(loginForm: any) {
    await this.httpClient.get('loginSeller/' + loginForm.loginId + '/' + loginForm.password).toPromise().then((data: any) => { this.seller = data; });
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
    return this.httpClient.post('registerStore', registerForm);
  }

  getAllproducts(storeId: any) {
    return this.httpClient.get('getProductByStore/' + storeId);
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

  upload(uploadFile: any) :any{
    return this.httpClient.post('/upload',uploadFile);
  }

}

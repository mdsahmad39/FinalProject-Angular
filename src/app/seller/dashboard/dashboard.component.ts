import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  addProduct: any;
  editProduct: any;
  deleteProduct: any;
  productsList: any;
  imagePathList: any;
  store: any;
  productName: any;
  subscription: Subscription;

  constructor(public sellerService: SellerService) {

    this.editProduct = { productId: '', productName: '', category: '', brand: '', description: '', weight: '', availableQuantity: '', price: '', createdDate: '', expiryDate: '', store: '', orderDetails: '' };

    this.store = this.sellerService.getSellerProfile();

    this.addProduct = { productName: '', category: '', brand: '', description: '', weight: '', availableQuantity: '', price: '', createdDate: '', expiryDate: '', store: this.store };

    this.deleteProduct = { productName: '', category: '', brand: '', description: '', weight: '', availableQuantity: '', price: '', createdDate: '', expiryDate: '', store: this.store };

    this.subscription = timer(0, 1000).pipe(
      switchMap(() => this.sellerService.getAllproducts(this.sellerService.getSellerId()))
    ).subscribe(data => this.productsList = data);

    this.imagePathList = '../../assets/images/eggs.jpg';
    this.productName = '';
  }

  ngOnInit(): void {

  }

  addProductToDB(): void {
    jQuery('#addProductModel').modal('show');
  }

  sendAddProductQuery(): void {
    this.sellerService.addProduct(this.addProduct).subscribe();
  }

  showEditPopup(product: any): void {
    this.editProduct = product;
    jQuery('#productModel').modal('show');
  }

  updateProduct(): void {
    this.sellerService.updateProduct(this.editProduct).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteProductConfirmation(product: any) {
    this.deleteProduct = product;
    jQuery('#deleteProductModel').modal('show');
  }

  delete(product: any) {
    this.sellerService.deleteProduct(product).subscribe((data: any) => {
      const i = this.productsList.findIndex((data: any) => { return data.productId === product.productId; })
      this.productsList.splice(i, 1);
    });
  }

  getProductByName(): any {

  }

}

import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

declare var jQuery: any;

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  editProduct: any;
  productsList: any;
  imagePathList: any;

  constructor(public storeService: StoreService) {
    this.editProduct = { productId: '', productName: '', category: '', weight: '', availableQuantity: '', price: '', createdDate: '', expiryDate: '', store: '', orderDetails: '' }
  }

  ngOnInit(): void {
    this.storeService.getAllproducts(this.storeService.getSellerId()).subscribe((data: any) => {
      this.productsList = data;
    });
    this.imagePathList = '../../assets/images/eggs.jpg';
  }

  showEditPopup(product: any): void {
    this.editProduct = product;
    jQuery('#productModel').modal('show');
  }

  updateProduct(): void {
    this.storeService.updateProduct(this.editProduct).subscribe();
  }


}

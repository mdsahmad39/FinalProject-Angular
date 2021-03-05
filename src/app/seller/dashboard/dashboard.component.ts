import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  editProduct: any;
  productsList: any;
  imagePathList: any;

  constructor(public sellerService: SellerService) {
    this.editProduct = { productId: '', productName: '', category: '', weight: '', availableQuantity: '', price: '', createdDate: '', expiryDate: '', store: '', orderDetails: '' }
  }

  ngOnInit(): void {
    this.sellerService.getAllproducts(this.sellerService.getSellerId()).subscribe((data: any) => {
      this.productsList = data;
    });
    this.imagePathList = '../../assets/images/eggs.jpg';
  }

  showEditPopup(product: any): void {
    this.editProduct = product;
    jQuery('#productModel').modal('show');
  }

  updateProduct(): void {
    this.sellerService.updateProduct(this.editProduct).subscribe();
  }

}

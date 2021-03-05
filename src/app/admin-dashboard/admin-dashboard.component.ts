import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

stores:any;
  constructor() {
    this.stores=[
    {storeid:1, storename:'dmart',       Totalavaliableproducts:34, orderrecevived:'yes', storeworkingstatus:'opened' },
    {storeid:2, storename:'smart',       Totalavaliableproducts:93, orderrecevived:'yes', storeworkingstatus:'opened' },
    {storeid:3, storename:'more',        Totalavaliableproducts:68, orderrecevived:'yes', storeworkingstatus:'opened' },
    {storeid:4, storename:'trenitra',    Totalavaliableproducts:24, orderrecevived:'yes', storeworkingstatus:'opened' },
    {storeid:5, storename:'rathanadeep', Totalavaliableproducts:72, orderrecevived:'yes', storeworkingstatus:'opened' }
  ];

  }

  ngOnInit(): void {
  }

}

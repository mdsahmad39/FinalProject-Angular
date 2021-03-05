import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class SellerRegisterComponent implements OnInit {

  countriesList: any;
  constructor(public sellerService: SellerService, public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getAllCountries().subscribe((data: any) => this.countriesList = data);
  }

  submitRegisterForm(registerForm: any): void {
    console.log(registerForm);
    this.sellerService.register(registerForm).subscribe((result: any) => console.log(result));
  }

}

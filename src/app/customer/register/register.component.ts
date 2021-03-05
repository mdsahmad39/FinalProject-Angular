import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countriesList: any;
  constructor(public customerService: CustomerService, public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getAllCountries().subscribe((data: any) => this.countriesList = data);
  }

  submitRegisterForm(registerForm: any): void {
    console.log(registerForm);
    this.customerService.register(registerForm).subscribe((result: any) => console.log(result));
  }

}

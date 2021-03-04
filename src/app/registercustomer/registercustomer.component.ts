import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {
  countriesList: any;
  constructor(public customerService: CustomerService, public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllCountries().subscribe((data: any) => this.countriesList = data);
  }

  submitRegisterForm(registerForm: any): void {
    console.log(registerForm);
    this.customerService.register(registerForm).subscribe((result: any) => console.log(result));
  }

}

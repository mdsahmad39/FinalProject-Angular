import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
  }

  submitRegisterForm(registerForm: any): void {
    console.log(registerForm);
    this.customerService.register(registerForm).subscribe((result: any) => console.log(result));
  }

}

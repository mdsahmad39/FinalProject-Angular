import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registerstore',
  templateUrl: './registerstore.component.html',
  styleUrls: ['./registerstore.component.css']
})
export class RegisterstoreComponent implements OnInit {

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
  }

  submitRegisterForm(registerForm: any): void {
    console.log(registerForm);
    this.customerService.register(registerForm).subscribe((result: any) => console.log(result));
  }

}

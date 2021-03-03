import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-registerstore',
  templateUrl: './registerstore.component.html',
  styleUrls: ['./registerstore.component.css']
})
export class RegisterstoreComponent implements OnInit {

  constructor(public storeService: StoreService) { }

  ngOnInit(): void {
  }

  submitRegisterForm(registerForm: any): void {
    console.log(registerForm);
    this.storeService.register(registerForm).subscribe((result: any) => console.log(result));
  }

}

import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { StoreService } from '../store.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registerstore',
  templateUrl: './registerstore.component.html',
  styleUrls: ['./registerstore.component.css']
})
export class RegisterstoreComponent implements OnInit {

  countriesList: any;
  constructor(public storeService: StoreService, public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllCountries().subscribe((data: any) => this.countriesList = data);
  }

  submitRegisterForm(registerForm: any): void {
    console.log(registerForm);
    this.storeService.register(registerForm).subscribe((result: any) => console.log(result));
  }

}

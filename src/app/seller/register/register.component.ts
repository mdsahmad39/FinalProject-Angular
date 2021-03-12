import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class SellerRegisterComponent implements OnInit {

  countriesList: any;
  store:any;
  uploadFile:any=File;
  fileName:any;
  message:any;
  formData = new FormData();
  newFileName:any;
  storeLogin:any;
  formats:any[]=[];


  constructor(public sellerService: SellerService, public commonService: CommonService, public router: Router) { }

  ngOnInit(): void {
    this.commonService.getAllCountries().subscribe((data: any) => this.countriesList = data);
    this.message='';
  }

  submitRegisterForm(registerForm: any): void {
    console.log(registerForm);
    this.store={
      storeId:'',
      storeName:registerForm.storeName,
      sellerName:registerForm.sellerName,
      phoneNumber:registerForm.phoneNumber,
      emailId:registerForm.emailId,
      fileName:registerForm.loginId+"."+this.formats[1],
      loginId:registerForm.loginId,
      password:registerForm.password,
      address:{addressId:'',houseNo:registerForm.houseNo,street:registerForm.street,city:registerForm.city,pincode:registerForm.pincode,state:registerForm.state,country:registerForm.country}
    };
    this.sellerService.register(this.store).subscribe((result: any) => console.log(result));
    this.onUpload();
    //this.router.navigate(['']);
  }

  onSelectFile(event :any) {
    const file = event.target.files[0];
    this.formats = file.name.split('.');
    this.fileName=file.name;
    this.newFileName=this.storeLogin+"."+this.formats[1];
    this.uploadFile=file;
    this.formData.append('File',this.uploadFile);
    this.formData.append('newFileName',this.newFileName);
    console.log(file);
  }

  onUpload(){
    this.sellerService.newFileName=this.newFileName+"."+this.formats[1];
    this.sellerService.upload(this.formData).subscribe((result:any) => {console.log(result)},
    (error:any) => {console.log(error.error)});
    console.log(this.message);
  }

}

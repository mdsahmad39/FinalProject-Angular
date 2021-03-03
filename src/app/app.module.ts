import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterstoreComponent } from './registerstore/registerstore.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';

const appRoute: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login_customer', component: CustLoginComponent },
  { path: 'login_seller', component: SellerLoginComponent },
  { path: 'register_customer', component: RegistercustomerComponent },
  { path: 'register_store', component: RegisterstoreComponent },
  { path: 'dashboard_store', component: CustDashboardComponent },
  { path: 'dashboard_seller', component: SellerDashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistercustomerComponent,
    RegisterstoreComponent,
    HeaderComponent,
    FooterComponent,
    CustDashboardComponent,
    SellerDashboardComponent,
    CustLoginComponent,
    SellerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

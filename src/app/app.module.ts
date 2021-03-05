import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterstoreComponent } from './registerstore/registerstore.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StoreProfileComponent } from './store-profile/store-profile.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { StoreDisplayComponent } from './store-display/store-display.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const appRoute: Routes = [
  { path: '', component: HomepageComponent },
  {path: 'adminDashboard',  component: AdminDashboardComponent},
  { path: 'login_customer', component: CustLoginComponent },
  { path: 'login_seller', component: SellerLoginComponent },
  { path: 'register_customer', component: RegistercustomerComponent },
  { path: 'register_seller', component: RegisterstoreComponent },
  { path: 'dashboard_customer', component: CustDashboardComponent },
  { path: 'dashboard_seller', component: SellerDashboardComponent },
  { path: 'profile_seller', component: StoreProfileComponent },
  { path: 'profile_customer', component: CustomerProfileComponent },
  { path: 'storeDisplay', component: StoreDisplayComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistercustomerComponent,
    RegisterstoreComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    CustDashboardComponent,
    SellerDashboardComponent,
    CustLoginComponent,
    SellerLoginComponent,
    StoreProfileComponent,
    CustomerProfileComponent,
    StoreDisplayComponent,
    AdminDashboardComponent
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

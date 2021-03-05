import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './common/homepage/homepage.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { LoginComponent } from './customer/login/login.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { RegisterComponent } from './customer/register/register.component';
import { StoreDisplayComponent } from './customer/store-display/store-display.component';
import { SellerDashboardComponent } from './seller/dashboard/dashboard.component';
import { SellerLoginComponent } from './seller/login/login.component';
import { SellerProfileComponent } from './seller/profile/profile.component';
import { SellerRegisterComponent } from './seller/register/register.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { CustomerAuthGuard } from './customer/auth.guard';
import { SellerAuthGuard } from './seller/auth.guard';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';


const appRoute: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login_customer', component: LoginComponent },
  { path: 'login_seller', component: SellerLoginComponent },
  { path: 'register_customer', component: RegisterComponent },
  { path: 'register_seller', component: SellerRegisterComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'dashboard_customer', canActivate: [CustomerAuthGuard], component: DashboardComponent },
  { path: 'dashboard_seller', canActivate: [SellerAuthGuard], component: SellerDashboardComponent },
  { path: 'profile_seller', canActivate: [SellerAuthGuard], component: SellerProfileComponent },
  { path: 'profile_customer', canActivate: [CustomerAuthGuard], component: ProfileComponent },
  { path: 'storeDisplay', canActivate: [CustomerAuthGuard], component: StoreDisplayComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    StoreDisplayComponent,
    SellerDashboardComponent,
    SellerLoginComponent,
    SellerProfileComponent,
    SellerRegisterComponent,
    AdminDashboardComponent,
    FooterComponent,
    HeaderComponent
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

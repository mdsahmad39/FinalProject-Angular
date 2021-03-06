import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
  { path: 'loginCustomer', component: LoginComponent },
  { path: 'loginSeller', component: SellerLoginComponent },
  { path: 'registerCustomer', component: RegisterComponent },
  { path: 'registerSeller', component: SellerRegisterComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'dashboardCustomer', canActivate: [CustomerAuthGuard], component: DashboardComponent },
  { path: 'dashboardSeller', canActivate: [SellerAuthGuard], component: SellerDashboardComponent },
  { path: 'profileSeller', canActivate: [SellerAuthGuard], component: SellerProfileComponent },
  { path: 'profileCustomer', canActivate: [CustomerAuthGuard], component: ProfileComponent },
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
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

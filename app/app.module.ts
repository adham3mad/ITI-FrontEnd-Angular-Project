import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreService } from './store.service';
import { HttpClientModule } from '@angular/common/http';
import { signinComponent } from './signin/sign-incomponent';
import { DetilesComponent } from './detiles/detiles.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CategoryjeweleryComponent } from './categoryjewelery/categoryjewelery.component';
import { MensclothingComponent } from './mensclothing/mensclothing.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { WomensclothingComponent } from './womensclothing/womensclothing.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductGuardService } from './product-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoreListComponent,
    signinComponent,
    DetilesComponent,
    SignupComponent,
    HomeComponent,
    ContactusComponent,
    CategoryjeweleryComponent,
    MensclothingComponent,
    ElectronicsComponent,
    WomensclothingComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StoreService, ProductGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

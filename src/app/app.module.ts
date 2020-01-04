import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EqualValidator } from './signup/validation';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EqualValidator,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

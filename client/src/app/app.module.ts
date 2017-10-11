import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

//router
import { AppRoutingModule } from './_router/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessagesFormErrorComponent } from './messages-form-error/messages-form-error.component';


@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    RegisterComponent,
    // LoginComponent,
    UserinfoComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    MessagesFormErrorComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

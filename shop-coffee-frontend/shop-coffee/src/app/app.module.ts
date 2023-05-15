import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminEditPageComponent,
    UserLoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

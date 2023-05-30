import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { CreateCoffeeComponent } from './create-coffee/create-coffee.component';
import { UserHomepageComponent } from './pages/user-homepage/user-homepage.component';
import { OrderItemSpecificsComponent } from './pages/order-item-specifics/order-item-specifics.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';

const routes: Routes = [
  { path: 'admin-edit', component: AdminEditPageComponent },
  { path: 'user-login', component: UserLoginPageComponent},
  { path: 'create-coffee', component: CreateCoffeeComponent},
  { path: 'user-homepage', component: UserHomepageComponent},
  { path: 'order-item-specifics', component: OrderItemSpecificsComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'checkout', component: CheckoutPageComponent},
  { path: 'order-complete', component: OrderCompleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

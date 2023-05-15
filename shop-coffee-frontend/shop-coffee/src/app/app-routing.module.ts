import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';

const routes: Routes = [
  { path: 'admin-edit', component: AdminEditPageComponent },
  { path: 'user-login', component: UserLoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

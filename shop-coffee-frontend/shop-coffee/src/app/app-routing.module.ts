import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';

const routes: Routes = [
  { path: 'admin-edit', component: AdminEditPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

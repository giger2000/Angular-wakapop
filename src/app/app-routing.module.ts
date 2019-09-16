import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'new-product', loadChildren: './new-product/new-product.module#NewProductPageModule' },
  // { path: 'new-product-modal', loadChildren: './new-product-modal/new-product-modal.module#NewProductModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path : "",
    redirectTo: "header",
    pathMatch: "full"
  },
  {
    path: "cart",
    component:CartComponent
  },
  {
    path: "header",
    component: HeaderComponent
  },
  {
    path:"products",
    component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

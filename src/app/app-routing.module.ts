import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ProductsComponent } from './products/products.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'products', component: ProductsComponent, title: 'Products page' },
  { path: 'product/:id', component: ViewProductDetailsComponent, title: 'product details'},
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';


export const routes: Routes = [
  { path: 'products', component: ProductsComponent, title: 'Products page' },
  { path: 'product/:id', component: ProductListComponent, title: 'product details'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }  
];

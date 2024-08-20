import { Component } from '@angular/core';
import { ProductsComponent } from '../../products/products.component';
import { HomeComponent } from '../../home/home.component'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'main-menu',
  standalone: true,
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  imports: [
    ProductsComponent,
    HomeComponent,
    RouterModule
  ]
})
export class MainMenuComponent { }

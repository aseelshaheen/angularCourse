import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainMenuComponent } from '../header/main-menu/main-menu.component';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    ProductsComponent,
    CommonModule,
    HeaderComponent,
    MainMenuComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}

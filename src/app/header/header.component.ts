// header.component.ts
import { Component } from '@angular/core';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopMenuComponent, MainMenuComponent, ProductsComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductsComponent } from './products/products.component';
import { ProductsPageComponent } from './products-page/products-page/products-page.component';
import { HomeComponent } from './home-page/home/home.component';
import { Product1ListComponent } from "./products-page/product1-list/product1-list.component";
import { Product2ListComponent } from "./products-page/product2-list/product2-list.component";  

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductsComponent,
    ProductsPageComponent,
    HomeComponent,
    Product1ListComponent,
    Product2ListComponent
]
})
export class AppComponent {
  title = 'angularCourse';
}

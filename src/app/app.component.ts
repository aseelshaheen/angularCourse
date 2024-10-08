import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component'; 
import { ProductListComponent } from "./product-list/product-list.component";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from "./details/details.component";
// import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    FormsModule,
    HeaderComponent,
    TopHeaderComponent,
    MainMenuComponent,
    ProductsComponent,
    HomeComponent,
    ProductListComponent,
    RouterModule
    // AppRoutingModule 
    ,
    DetailsComponent
]
})
export class AppComponent {
  title = 'angularCourse';
}

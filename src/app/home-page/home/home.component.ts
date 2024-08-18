import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { TopMenuComponent } from '../../header/top-menu/top-menu.component';
import { MainMenuComponent } from '../../header/main-menu/main-menu.component';
import { Product1ImagesComponent } from "../../products-page/product1-images/product1-images.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    HeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    Product1ImagesComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
}

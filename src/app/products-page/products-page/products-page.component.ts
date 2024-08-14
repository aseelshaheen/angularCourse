import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { TopHeaderComponent } from '../../top-header/top-header.component';
import { ProductsComponent } from "../../products/products.component";
import { SamsungProductsComponent } from '../../samsung-products/samsung-products.component';


@Component({
  selector: 'products-page',
  standalone: true,
  imports: [HeaderComponent, TopHeaderComponent, ProductsComponent, SamsungProductsComponent],
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']  // Corrected property name
})
export class ProductsPageComponent {

}


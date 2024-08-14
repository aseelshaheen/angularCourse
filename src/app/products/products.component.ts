import { Component } from '@angular/core';
import { Product1ImagesComponent } from "../products-page/product1-images/product1-images.component";
import { Product2ImagesComponent } from "../products-page/product2-images/product2-images.component";
import { Product3ImagesComponent } from "../products-page/product3-images/product3-images.component";
import { Product4ImagesComponent } from "../products-page/product4-images/product4-images.component";
import { Product5ImagesComponent } from "../products-page/product5-images/product5-images.component";
import { Product6ImagesComponent } from "../products-page/product6-images/product6-images.component";

@Component({
  selector: 'products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [Product1ImagesComponent,
    Product2ImagesComponent,
    Product3ImagesComponent,
    Product4ImagesComponent,
    Product5ImagesComponent, 
    Product6ImagesComponent]
})
export class ProductsComponent { }

// import { Component } from '@angular/core';
// import { Product1ImagesComponent } from "../products-page/product1-images/product1-images.component";

// @Component({
//   selector: 'products',
//   standalone: true,
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css'],
//   imports: [Product1ImagesComponent]
// })
// export class ProductsComponent { }

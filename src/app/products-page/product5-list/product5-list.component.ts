import { Component } from '@angular/core';
import { Product5ImagesComponent } from "../product5-images/product5-images.component";

@Component({
  selector: 'product5-list',
  standalone: true,
  imports: [Product5ImagesComponent],
  templateUrl: './product5-list.component.html',
  styleUrl: './product5-list.component.css'
})
export class Product5ListComponent {
  product ={
    name: "Apple Watch",
    Colors: "White, Pink, Green, Black, Gold",
    price: 470,
    Display: "Always-On Retina display, 41mm or 45mm case size.",
    HealthFeatures: "Blood Oxygen app, ECG app, heart rate monitoring, sleep tracking, and fall detection.",
    Processor: "S8 SiP with 64-bit dual-core processor.",
    BatteryLife: "Up to 18 hours, with fast charging capability.",
    Connectivity: "GPS, Cellular models available, swim-proof, and available with different bands.",
    Software: "watchOS 9, with customizable watch faces and enhanced fitness tracking.",
    inStock: 9,
    discount: 7.5
  }


  getDiscountPrice () {
    return this.product.price - ((this.product.price * this.product.discount) / 100)
  }

  getStockMessage() {
    if (this.product.inStock === 0) {
      return 'Not in stock';
    } else if (this.product.inStock > 0 && this.product.inStock < 10) {
      return 'Only ' + this.product.inStock +' in stock';
    } else {
      return '';
    }
  }

}

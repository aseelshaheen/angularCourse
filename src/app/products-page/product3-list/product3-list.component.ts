import { Component } from '@angular/core';
import { Product3ImagesComponent } from "../product3-images/product3-images.component";

@Component({
  selector: 'product3-list',
  standalone: true,
  imports: [Product3ImagesComponent],
  templateUrl: './product3-list.component.html',
  styleUrls: ['./product3-list.component.css']
})
export class Product3ListComponent {

  product ={
    name: "Airpods Pro",
    Colors: "White",
    price: 250,
    Design: "In-ear wireless earbuds with customizable silicone tips.",
    Sound: "Active Noise Cancellation, Transparency Mode, Adaptive EQ, and Spatial Audio with dynamic head tracking.",
    BatteryLife: "Up to 4.5 hours of listening time on a single charge, with over 24 hours provided by the MagSafe charging case.",
    Features: "Sweat and water resistance (IPX4), H1 chip for seamless connectivity, hands-free 'Hey Siri' functionality.",
    Compatibility: "Compatible with all Apple devices running iOS, macOS, watchOS, and tvOS.",
    inStock: 20,
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

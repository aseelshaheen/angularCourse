import { Component } from '@angular/core';
import { Product1ImagesComponent } from "../product1-images/product1-images.component";

@Component({
  selector: 'product1-list',
  standalone: true,
  imports: [Product1ImagesComponent],
  templateUrl: './product1-list.component.html',
  styleUrls: ['./product1-list.component.css']
})
export class Product1ListComponent {

    product = {
      name : "IPhone 14 Pro Max",
      colors : "Gold, Pink, Silver, Black, White",
      price: 800,
      display : "6.7-inch Super Retina XDR display with ProMotion, HDR10, and Dolby Vision support",
      camera: "Triple camera system with 48MP main, 12MP ultra-wide, and 12MP telephoto lenses",
      Processor: "A16 Bionic chip with a 6-core CPU and 5-core GPU.",
      BatteryLife: "All-day battery life with up to 29 hours of video playback.",
      Design: "Surgical-grade stainless steel frame, Ceramic Shield front cover, and available in multiple colors.",
      Features: "5G capability, Face ID, Always-On display, Dynamic Island for notifications and interactions, and iOS 16/17.",
      inStock: 5,
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

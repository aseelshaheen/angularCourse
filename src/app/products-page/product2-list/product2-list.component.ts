import { Component } from '@angular/core';
import { Product2ImagesComponent } from "../product2-images/product2-images.component";

@Component({
  selector: 'product2-list',
  standalone: true,
  imports: [Product2ImagesComponent],
  templateUrl: './product2-list.component.html',
  styleUrls: ['./product2-list.component.css']
})
export class Product2ListComponent {
  product = {
    name : "MackBook M2",
    colors : "Gold, Silver, Black, White",
    price: 1000,
    Memory: "8GB, 16GB, or 24GB unified memory.",
    Storage: "Configurations from 256GB up to 2TB SSD.",
    display : "13.3-inch Retina display or 14-inch and 16-inch Liquid Retina XDR displays (depending on the model)",
    Processor: "Apple M2 chip with 8-core CPU and up to 10-core GPU",
    BatteryLife: "Up to 20 hours of video playback on a single charge.",
    Design: "Slim, lightweight, available in multiple color",
    Features: "macOS Ventura, Touch ID, Magic Keyboard, Force Touch trackpad, and high-quality stereo speakers.",
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

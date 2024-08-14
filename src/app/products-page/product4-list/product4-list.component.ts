import { Component } from '@angular/core';
import { Product4ImagesComponent } from "../product4-images/product4-images.component";

@Component({
  selector: 'product4-list',
  standalone: true,
  imports: [Product4ImagesComponent],
  templateUrl: './product4-list.component.html',
  styleUrls: ['./product4-list.component.css']
})
export class Product4ListComponent {


  product ={
    name: "Apple Headphones",
    Colors: "White Pink, Green, Black, Navy",
    price: 300,
    Design: "Over-ear headphones with memory foam ear cushions and stainless steel frame.",
    Sound: "Active Noise Cancellation, Transparency Mode, Spatial Audio with dynamic head tracking, and Adaptive EQ.",
    BatteryLife: "Up to 20 hours of listening time with Active Noise Cancellation or Transparency Mode enabled.",
    Features: "Digital crown for volume control, Siri integration, and Smart Case for ultra-low power mode.",
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

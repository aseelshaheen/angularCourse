import { Component } from '@angular/core';
import { Product6ImagesComponent } from "../product6-images/product6-images.component";

@Component({
  selector: 'product6-list',
  standalone: true,
  imports: [Product6ImagesComponent],
  templateUrl: './product6-list.component.html',
  styleUrl: './product6-list.component.css'
})
export class Product6ListComponent {
  product ={
    name: "Apple TV Screen (Apple TV 4K) ",
    Colors: "Black",
    price: 1000,
    Resolution: "4K HDR with Dolby Vision and HDR10+ support.",
    Processor: "A15 Bionic chip for improved performance.",
    Storage: "32GB or 64GB internal storage.",
    Features: "Supports Apple Arcade, Apple Fitness+, and Apple Music. Includes Siri Remote with touch-enabled clickpad.",
    Audio: "Dolby Atmos support for immersive audio.",
    Connectivity: "Wi-Fi 6, Bluetooth 5.0, HDMI 2.1, and Ethernet port.",
    Software: "tvOS, with access to the Apple TV app, streaming services, and HomeKit integration.",
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

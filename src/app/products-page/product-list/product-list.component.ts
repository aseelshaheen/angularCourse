import { Component } from '@angular/core';
import { Product1ImagesComponent } from "../product1-images/product1-images.component";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [Product1ImagesComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [
    // Existing Apple products...
    {
      name: "IPhone 14 Pro Max",
      images: [
        'assets/product1/product11.jpg',
        'assets/product1/product12.jpg',
        'assets/product1/product13.jpg'
      ],
      attributes: [
        { key: "Colors", value: "Gold, Pink, Silver, Black, White" },
        { key: "Price", value: 800 },
        { key: "In Stock", value: 5 },
        { key: "Discount", value: 7.5 }
      ],
      details: [
        { key: "Display", value: "6.7-inch Super Retina XDR display with ProMotion, HDR10, and Dolby Vision support" },
        { key: "Camera", value: "Triple camera system with 48MP main, 12MP ultra-wide, and 12MP telephoto lenses" },
        { key: "Processor", value: "A16 Bionic chip with a 6-core CPU and 5-core GPU" },
        { key: "Battery Life", value: "All-day battery life with up to 29 hours of video playback" },
        { key: "Design", value: "Surgical-grade stainless steel frame, Ceramic Shield front cover, and available in multiple colors" },
        { key: "Features", value: "5G capability, Face ID, Always-On display, Dynamic Island for notifications and interactions, and iOS 16/17" }
      ]
    },
    {
      name: "MacBook M2",
      images: [
        'assets/product2/product21.jpg',
        'assets/product2/product22.jpg',
        'assets/product2/product23.jpg'
      ],
      attributes: [
        { key: "Colors", value: "Gold, Silver, Black, White" },
        { key: "Price", value: 1000 },
        { key: "In Stock", value: 5 },
        { key: "Discount", value: 7.5 }
      ],
      details: [
        { key: "Memory", value: "8GB, 16GB, or 24GB unified memory" },
        { key: "Storage", value: "Configurations from 256GB up to 2TB SSD" },
        { key: "Display", value: "13.3-inch Retina display or 14-inch and 16-inch Liquid Retina XDR displays (depending on the model)" },
        { key: "Processor", value: "Apple M2 chip with 8-core CPU and up to 10-core GPU" },
        { key: "Battery Life", value: "Up to 20 hours of video playback on a single charge" },
        { key: "Design", value: "Slim, lightweight, available in multiple colors" },
        { key: "Features", value: "macOS Ventura, Touch ID, Magic Keyboard, Force Touch trackpad, and high-quality stereo speakers" }
      ]
    },
    {
      name: "AirPods Pro",
      images: [
        'assets/product3/product31.jpeg',
        'assets/product3/product32.jpeg',
        'assets/product3/product33.jpeg'
      ],
      attributes: [
        { key: "Colors", value: "White" },
        { key: "Price", value: 250 },
        { key: "In Stock", value: 20 },
        { key: "Discount", value: 7.5 }
      ],
      details: [
        { key: "Design", value: "In-ear wireless earbuds with customizable silicone tips" },
        { key: "Sound", value: "Active Noise Cancellation, Transparency Mode, Adaptive EQ, and Spatial Audio with dynamic head tracking" },
        { key: "Battery Life", value: "Up to 4.5 hours of listening time on a single charge, with over 24 hours provided by the MagSafe charging case" },
        { key: "Features", value: "Sweat and water resistance (IPX4), H1 chip for seamless connectivity, hands-free 'Hey Siri' functionality" },
        { key: "Compatibility", value: "Compatible with all Apple devices running iOS, macOS, watchOS, and tvOS" }
      ]
    },
    {
      name: "Apple Headphones",
      attributes: [
        { key: "Colors", value: "White Pink, Green, Black, Navy" },
        { key: "Price", value: 300 },
        { key: "In Stock", value: 9 },
        { key: "Discount", value: 7.5 }
      ],
      images: [
        'assets/product4/product41.jpeg',
        'assets/product4/product42.jpg',
        'assets/product4/product43.jpeg'
      ],
      details: [
        { key: "Design", value: "Over-ear headphones with memory foam ear cushions and stainless steel frame" },
        { key: "Sound", value: "Active Noise Cancellation, Transparency Mode, Spatial Audio with dynamic head tracking, and Adaptive EQ" },
        { key: "Battery Life", value: "Up to 20 hours of listening time with Active Noise Cancellation or Transparency Mode enabled" },
        { key: "Features", value: "Digital crown for volume control, Siri integration, and Smart Case for ultra-low power mode" }
      ]
    },
    {
      name: "Apple Watch",
      images: [
        'assets/product5/product51.jpg',
        'assets/product5/product52.jpg',
        'assets/product5/product53.jpg'
      ],
      attributes: [
        { key: "Colors", value: "White, Pink, Green, Black, Gold" },
        { key: "Price", value: 470 },
        { key: "In Stock", value: 9 },
        { key: "Discount", value: 7.5 }
      ],
      details: [
        { key: "Display", value: "Always-On Retina display, 41mm or 45mm case size" },
        { key: "Health Features", value: "Blood Oxygen app, ECG app, heart rate monitoring, sleep tracking, and fall detection" },
        { key: "Processor", value: "S8 SiP with 64-bit dual-core processor" },
        { key: "Battery Life", value: "Up to 18 hours, with fast charging capability" },
        { key: "Connectivity", value: "GPS, Cellular models available, swim-proof, and available with different bands" },
        { key: "Software", value: "watchOS 9, with customizable watch faces and enhanced fitness tracking" }
      ]
    },
    {
      name: "Apple TV Screen (Apple TV 4K)",
      images: [
        'assets/product6/product61.jpg',
        'assets/product6/product62.jpeg',
        'assets/product6/product63.jpeg'
      ],
      attributes: [
        { key: "Colors", value: "Black" },
        { key: "Price", value: 1000 },
        { key: "In Stock", value: 9 },
        { key: "Discount", value: 7.5 }
      ],
      details: [
        { key: "Resolution", value: "4K HDR with Dolby Vision and HDR10+ support" },
        { key: "Processor", value: "A15 Bionic chip for improved performance" },
        { key: "Storage", value: "32GB or 64GB internal storage" },
        { key: "Features", value: "Supports Apple Arcade, Apple Fitness+, and Apple Music. Includes Siri Remote with touch-enabled clickpad" },
        { key: "Audio", value: "Dolby Atmos support for immersive audio" },
        { key: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.0, HDMI 2.1, and Ethernet port" },
        { key: "Software", value: "tvOS, with access to the Apple TV app, streaming services, and HomeKit integration" }
      ]
    },

    // New Samsung Products
    {
      name: "Samsung S24 Ultra",
      images: [
        'assets/product7/product71.jpg',
        'assets/product7/product72.jpeg',
        'assets/product7/product73.jpg'
      ],
      attributes: [
        { key: "Colors", value: "Phantom Black, Phantom Silver, Phantom Violet" },
        { key: "Price", value: 1200 },
        { key: "In Stock", value: 7 },
        { key: "Discount", value: 10 }
      ],
      details: [
        { key: "Display", value: "6.8-inch Dynamic AMOLED 2X with 120Hz refresh rate" },
        { key: "Camera", value: "108MP main, 12MP ultra-wide, 10MP periscope telephoto, and 10MP telephoto lenses" },
        { key: "Processor", value: "Exynos 2200 or Snapdragon 8 Gen 2 (market-dependent)" },
        { key: "Battery Life", value: "5000mAh battery with 45W fast charging" },
        { key: "Features", value: "5G capability, IP68 water resistance, S Pen support, and One UI 5.0" }
      ]
    },
    {
      name: "Samsung QLED Screen",
      images: [
        'assets/product8/product81.jpg',
        'assets/product8/product82.jpg',
        'assets/product8/product83.jpg'
      ],
      attributes: [
        { key: "Colors", value: "Black, Silver" },
        { key: "Price", value: 1500 },
        { key: "In Stock", value: 4 },
        { key: "Discount", value: 12 }
      ],
      details: [
        { key: "Resolution", value: "4K UHD with Quantum HDR 32X" },
        { key: "Display", value: "55-inch, 65-inch, or 75-inch screen sizes" },
        { key: "Processor", value: "Neo Quantum Processor 4K" },
        { key: "Features", value: "Object Tracking Sound+, FreeSync Premium Pro, Smart TV capabilities" },
        { key: "Design", value: "Ultra-thin bezels, Ambient Mode+, and slim design" }
      ]
    },
    {
      name: "Samsung Tablet S8",
      images: [
        'assets/product9/product91.jpg',
        'assets/product9/product92.jpg',
        'assets/product9/product93.jpg'
      ],
      attributes: [
        { key: "Colors", value: "Mystic Black, Mystic Silver, Mystic Bronze" },
        { key: "Price", value: 800 },
        { key: "In Stock", value: 10 },
        { key: "Discount", value: 5 }
      ],
      details: [
        { key: "Display", value: "11-inch LCD with 120Hz refresh rate" },
        { key: "Processor", value: "Snapdragon 8 Gen 1" },
        { key: "Storage", value: "128GB, 256GB, or 512GB with microSD expansion" },
        { key: "Battery Life", value: "8000mAh with 45W fast charging" },
        { key: "Features", value: "S Pen included, DeX mode, and Quad AKG speakers" }
      ]
    },
    {
      name: "Samsung Galaxy Watch 5",
      images: [
        'assets/product10/product101.jpg',
        'assets/product10/product102.jpg',
        'assets/product10/product103.avif'
      ],
      attributes: [
        { key: "Colors", value: "Graphite, Silver, Sapphire" },
        { key: "Price", value: 350 },
        { key: "In Stock", value: 15 },
        { key: "Discount", value: 8 }
      ],
      details: [
        { key: "Display", value: "1.4-inch Super AMOLED with Always-On Display" },
        { key: "Battery Life", value: "Up to 48 hours with wireless charging" },
        { key: "Health Features", value: "Blood Oxygen, ECG, heart rate monitoring, sleep tracking" },
        { key: "Connectivity", value: "Bluetooth 5.2, GPS, LTE (optional)" },
        { key: "Features", value: "IP68 water resistance, Google Wear OS, and customizable watch faces" }
      ]
    },
    {
      name: "Samsung Laptop Galaxy Book Pro",
      images: [
        'assets/product11/product111.avif',
        'assets/product11/product112.jpg',
        'assets/product11/product113.webp'
      ],
      attributes: [
        { key: "Colors", value: "Mystic Blue, Mystic Silver" },
        { key: "Price", value: 1300 },
        { key: "In Stock", value: 6 },
        { key: "Discount", value: 7 }
      ],
      details: [
        { key: "Display", value: "13.3-inch or 15.6-inch AMOLED display" },
        { key: "Processor", value: "Intel Core i5 or i7 (11th Gen)" },
        { key: "Memory", value: "8GB or 16GB RAM" },
        { key: "Storage", value: "256GB, 512GB, or 1TB SSD" },
        { key: "Battery Life", value: "Up to 20 hours with fast charging support" },
        { key: "Features", value: "Wi-Fi 6, Thunderbolt 4, Windows 11, and Slim design" }
      ]
    },
    {
      name: "Samsung Power Bank",
      images: [
        'assets/product12/product121.webp',
        'assets/product12/product122.avif',
        'assets/product12/product123.webp'
      ],
      attributes: [
        { key: "Colors", value: "Black, Silver" },
        { key: "Price", value: 50 },
        { key: "In Stock", value: 25 },
        { key: "Discount", value: 15 }
      ],
      details: [
        { key: "Capacity", value: "20000mAh" },
        { key: "Ports", value: "USB-C, USB-A" },
        { key: "Charging Speed", value: "25W Super Fast Charging" },
        { key: "Design", value: "Slim and portable with LED indicators" },
        { key: "Features", value: "Supports pass-through charging and compatible with multiple devices" }
      ]
    }
  ];


  getDiscountPrice(product: any): number {
    const price = this.getAttributeValue(product, 'Price');
    const discount = this.getAttributeValue(product, 'Discount');
  
    // Only apply discount if it's present
    if (discount !== undefined && discount > 0) {
      return price ? price - (price * discount / 100) : 0;
    } else {
      return price;
    }
  }
  
  getStockMessage(product: any): string {
    const stock = this.getAttributeValue(product, 'In Stock');
  
    if (stock === undefined) {
      return '';  // Don't display any stock message if attribute is missing
    } else if (stock === 0) {
      return 'Not in stock';
    } else if (stock > 0 && stock < 10) {
      return 'Only ' + stock + ' in stock';
    } else {
      return 'In stock';
    }
  }
  
  

  private getAttributeValue(product: any, key: string): any {
    const attr = product.attributes.find((attr: any) => attr.key === key);
    return attr ? attr.value : undefined;
  }

    updateProductAttributes(): void {
      this.products.forEach(product => {
        const discountPrice = this.getDiscountPrice(product);
        const stockMessage = this.getStockMessage(product);
    
        // Remove 'In Stock' and 'Discount' attributes from the array
        product.attributes = product.attributes.filter((attr: any) => attr.key !== 'Discount' && attr.key !== 'In Stock');
    
        // Add 'Discounted Price' and 'Stock Status' attributes
        product.attributes.push({ key: 'Discounted Price', value: discountPrice });
        product.attributes.push({ key: 'Stock Status', value: stockMessage });
      })
    }
    

  ngOnInit(): void {
    this.updateProductAttributes(); // Call this method on initialization
  }
}

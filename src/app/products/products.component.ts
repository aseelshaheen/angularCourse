import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component'; 
import { TopHeaderComponent } from '../top-header/top-header.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'products',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TopHeaderComponent,
    RouterModule
    
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.products = ProductListComponent.getInstance().getProducts();
    
  }
  

  viewProductDetails(id: number): void {
    this.router.navigate(['/product', id]);
  }

  getAttribute(product: any, attributeName: string): any {
    const attribute = product.attributes.find((attr: { key: string; value: any; }) => attr.key === attributeName);
    return attribute ? attribute.value : null;
  }
  
}

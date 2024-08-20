import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'view-product-details',
  standalone: true,
  imports: [],
  templateUrl: './view-product-details.component.html',
  styleUrl: './view-product-details.component.css'
})
export class ViewProductDetailsComponent implements OnInit{

  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.product = ProductListComponent.getInstance().getProductById(id);
  }
}

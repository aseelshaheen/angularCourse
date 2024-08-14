import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product5ImagesComponent } from './product5-images.component';

describe('Product5ImagesComponent', () => {
  let component: Product5ImagesComponent;
  let fixture: ComponentFixture<Product5ImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product5ImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product5ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

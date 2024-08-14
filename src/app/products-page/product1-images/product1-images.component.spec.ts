import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1ImagesComponent } from './product1-images.component';

describe('Product1ImagesComponent', () => {
  let component: Product1ImagesComponent;
  let fixture: ComponentFixture<Product1ImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product1ImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product1ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

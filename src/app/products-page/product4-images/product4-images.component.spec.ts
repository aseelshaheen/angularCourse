import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product4ImagesComponent } from './product4-images.component';

describe('Product4ImagesComponent', () => {
  let component: Product4ImagesComponent;
  let fixture: ComponentFixture<Product4ImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product4ImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product4ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

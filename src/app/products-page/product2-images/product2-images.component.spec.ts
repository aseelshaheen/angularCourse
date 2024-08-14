import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2ImagesComponent } from './product2-images.component';

describe('Product2ImagesComponent', () => {
  let component: Product2ImagesComponent;
  let fixture: ComponentFixture<Product2ImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product2ImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product2ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

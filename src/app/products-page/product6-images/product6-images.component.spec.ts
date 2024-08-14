import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product6ImagesComponent } from './product6-images.component';

describe('Product6ImagesComponent', () => {
  let component: Product6ImagesComponent;
  let fixture: ComponentFixture<Product6ImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product6ImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product6ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

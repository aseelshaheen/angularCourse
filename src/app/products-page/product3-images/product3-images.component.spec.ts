import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product3ImagesComponent } from './product3-images.component';

describe('Product3ImagesComponent', () => {
  let component: Product3ImagesComponent;
  let fixture: ComponentFixture<Product3ImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product3ImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product3ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungProductsComponent } from './samsung-products.component';

describe('SamsungProductsComponent', () => {
  let component: SamsungProductsComponent;
  let fixture: ComponentFixture<SamsungProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamsungProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamsungProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

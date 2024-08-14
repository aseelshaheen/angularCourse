import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2ListComponent } from './product2-list.component';

describe('Product2ListComponent', () => {
  let component: Product2ListComponent;
  let fixture: ComponentFixture<Product2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product2ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

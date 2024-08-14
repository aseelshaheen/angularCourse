import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product1ListComponent } from './product1-list.component';

describe('Product1ListComponent', () => {
  let component: Product1ListComponent;
  let fixture: ComponentFixture<Product1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product1ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

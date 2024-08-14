import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product3ListComponent } from './product3-list.component';

describe('Product3ListComponent', () => {
  let component: Product3ListComponent;
  let fixture: ComponentFixture<Product3ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product3ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

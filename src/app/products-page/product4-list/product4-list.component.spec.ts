import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product4ListComponent } from './product4-list.component';

describe('Product4ListComponent', () => {
  let component: Product4ListComponent;
  let fixture: ComponentFixture<Product4ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product4ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product4ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

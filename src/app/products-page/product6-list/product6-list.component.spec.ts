import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product6ListComponent } from './product6-list.component';

describe('Product6ListComponent', () => {
  let component: Product6ListComponent;
  let fixture: ComponentFixture<Product6ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product6ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product6ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

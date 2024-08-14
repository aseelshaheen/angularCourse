import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product5ListComponent } from './product5-list.component';

describe('Product5ListComponent', () => {
  let component: Product5ListComponent;
  let fixture: ComponentFixture<Product5ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product5ListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product5ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

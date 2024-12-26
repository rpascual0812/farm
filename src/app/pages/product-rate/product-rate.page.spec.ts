import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductRatePage } from './product-rate.page';

describe('ProductRatePage', () => {
  let component: ProductRatePage;
  let fixture: ComponentFixture<ProductRatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductRatingsPage } from './product-ratings.page';

describe('ProductRatingsPage', () => {
  let component: ProductRatingsPage;
  let fixture: ComponentFixture<ProductRatingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRatingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

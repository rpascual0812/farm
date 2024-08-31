import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSliderPage } from './home-slider.page';

describe('HomeSliderPage', () => {
  let component: HomeSliderPage;
  let fixture: ComponentFixture<HomeSliderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

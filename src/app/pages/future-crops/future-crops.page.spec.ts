import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutureCropsPage } from './future-crops.page';

describe('FutureCropsPage', () => {
  let component: FutureCropsPage;
  let fixture: ComponentFixture<FutureCropsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureCropsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

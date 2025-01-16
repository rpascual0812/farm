import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFutureCropsPage } from './add-future-crops.page';

describe('AddFutureCropsPage', () => {
  let component: AddFutureCropsPage;
  let fixture: ComponentFixture<AddFutureCropsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFutureCropsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

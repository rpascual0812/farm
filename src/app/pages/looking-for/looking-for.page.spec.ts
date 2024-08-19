import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LookingForPage } from './looking-for.page';

describe('LookingForPage', () => {
  let component: LookingForPage;
  let fixture: ComponentFixture<LookingForPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LookingForPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

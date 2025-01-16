import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProducerPagePage } from './producer-page.page';

describe('ProducerPagePage', () => {
  let component: ProducerPagePage;
  let fixture: ComponentFixture<ProducerPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

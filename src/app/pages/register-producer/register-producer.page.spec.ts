import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterProducerPage } from './register-producer.page';

describe('RegisterProducerPage', () => {
  let component: RegisterProducerPage;
  let fixture: ComponentFixture<RegisterProducerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProducerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

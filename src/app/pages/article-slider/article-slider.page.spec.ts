import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleSliderPage } from './article-slider.page';

describe('ArticleSliderPage', () => {
  let component: ArticleSliderPage;
  let fixture: ComponentFixture<ArticleSliderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

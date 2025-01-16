import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostLookingForPage } from './post-looking-for.page';

describe('PostLookingForPage', () => {
  let component: PostLookingForPage;
  let fixture: ComponentFixture<PostLookingForPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLookingForPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

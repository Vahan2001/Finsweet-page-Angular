import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAllPostsComponent } from './home-all-posts.component';

describe('HomeAllPostsComponent', () => {
  let component: HomeAllPostsComponent;
  let fixture: ComponentFixture<HomeAllPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAllPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

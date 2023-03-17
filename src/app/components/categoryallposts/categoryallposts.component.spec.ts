import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryallpostsComponent } from './categoryallposts.component';

describe('CategoryallpostsComponent', () => {
  let component: CategoryallpostsComponent;
  let fixture: ComponentFixture<CategoryallpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryallpostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryallpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

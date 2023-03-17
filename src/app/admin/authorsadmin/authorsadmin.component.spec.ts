import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsadminComponent } from './authorsadmin.component';

describe('AuthorsadminComponent', () => {
  let component: AuthorsadminComponent;
  let fixture: ComponentFixture<AuthorsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

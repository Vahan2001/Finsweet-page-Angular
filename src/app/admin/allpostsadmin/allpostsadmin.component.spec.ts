import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpostsadminComponent } from './allpostsadmin.component';

describe('AllpostsadminComponent', () => {
  let component: AllpostsadminComponent;
  let fixture: ComponentFixture<AllpostsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpostsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpostsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

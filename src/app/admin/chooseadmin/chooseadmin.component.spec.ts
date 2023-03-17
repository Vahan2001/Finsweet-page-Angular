import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseadminComponent } from './chooseadmin.component';

describe('ChooseadminComponent', () => {
  let component: ChooseadminComponent;
  let fixture: ComponentFixture<ChooseadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

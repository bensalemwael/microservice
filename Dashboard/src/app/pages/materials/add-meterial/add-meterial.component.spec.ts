import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeterialComponent } from './add-meterial.component';

describe('AddMeterialComponent', () => {
  let component: AddMeterialComponent;
  let fixture: ComponentFixture<AddMeterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMeterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

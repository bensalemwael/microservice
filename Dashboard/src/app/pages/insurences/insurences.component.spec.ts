import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurencesComponent } from './insurences.component';

describe('InsurencesComponent', () => {
  let component: InsurencesComponent;
  let fixture: ComponentFixture<InsurencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

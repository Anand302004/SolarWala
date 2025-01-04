import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarcleaningComponent } from './solarcleaning.component';

describe('SolarcleaningComponent', () => {
  let component: SolarcleaningComponent;
  let fixture: ComponentFixture<SolarcleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarcleaningComponent]
    });
    fixture = TestBed.createComponent(SolarcleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

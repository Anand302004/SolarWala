import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarlightComponent } from './solarlight.component';

describe('SolarlightComponent', () => {
  let component: SolarlightComponent;
  let fixture: ComponentFixture<SolarlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarlightComponent]
    });
    fixture = TestBed.createComponent(SolarlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

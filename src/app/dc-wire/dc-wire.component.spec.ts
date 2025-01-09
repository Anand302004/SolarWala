import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcWireComponent } from './dc-wire.component';

describe('DcWireComponent', () => {
  let component: DcWireComponent;
  let fixture: ComponentFixture<DcWireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcWireComponent]
    });
    fixture = TestBed.createComponent(DcWireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

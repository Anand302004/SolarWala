import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mc4connectorComponent } from './mc4connector.component';

describe('Mc4connectorComponent', () => {
  let component: Mc4connectorComponent;
  let fixture: ComponentFixture<Mc4connectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mc4connectorComponent]
    });
    fixture = TestBed.createComponent(Mc4connectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

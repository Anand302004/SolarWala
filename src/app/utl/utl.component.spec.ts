import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtlComponent } from './utl.component';

describe('UtlComponent', () => {
  let component: UtlComponent;
  let fixture: ComponentFixture<UtlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtlComponent]
    });
    fixture = TestBed.createComponent(UtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

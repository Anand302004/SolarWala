import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACDBDCDBComponent } from './acdb-dcdb.component';

describe('ACDBDCDBComponent', () => {
  let component: ACDBDCDBComponent;
  let fixture: ComponentFixture<ACDBDCDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ACDBDCDBComponent]
    });
    fixture = TestBed.createComponent(ACDBDCDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

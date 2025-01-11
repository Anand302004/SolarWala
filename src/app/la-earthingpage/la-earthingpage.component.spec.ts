import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAEarthingpageComponent } from './la-earthingpage.component';

describe('LAEarthingpageComponent', () => {
  let component: LAEarthingpageComponent;
  let fixture: ComponentFixture<LAEarthingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LAEarthingpageComponent]
    });
    fixture = TestBed.createComponent(LAEarthingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

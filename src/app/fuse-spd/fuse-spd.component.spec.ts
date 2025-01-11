import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseSpdComponent } from './fuse-spd.component';

describe('FuseSpdComponent', () => {
  let component: FuseSpdComponent;
  let fixture: ComponentFixture<FuseSpdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuseSpdComponent]
    });
    fixture = TestBed.createComponent(FuseSpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

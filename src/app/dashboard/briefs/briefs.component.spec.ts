import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefsComponent } from './briefs.component';

describe('BriefsComponent', () => {
  let component: BriefsComponent;
  let fixture: ComponentFixture<BriefsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BriefsComponent]
    });
    fixture = TestBed.createComponent(BriefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandSelectionComponent } from './stand-selection.component';

describe('StandSelectionComponent', () => {
  let component: StandSelectionComponent;
  let fixture: ComponentFixture<StandSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandSelectionComponent]
    });
    fixture = TestBed.createComponent(StandSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

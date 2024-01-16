import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketTicketsComponent } from './cricket-tickets.component';

describe('CricketTicketsComponent', () => {
  let component: CricketTicketsComponent;
  let fixture: ComponentFixture<CricketTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricketTicketsComponent]
    });
    fixture = TestBed.createComponent(CricketTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketSquadComponent } from './cricket-squad.component';

describe('CricketSquadComponent', () => {
  let component: CricketSquadComponent;
  let fixture: ComponentFixture<CricketSquadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricketSquadComponent]
    });
    fixture = TestBed.createComponent(CricketSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

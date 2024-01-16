import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketInfoComponent } from './cricket-info.component';

describe('CricketInfoComponent', () => {
  let component: CricketInfoComponent;
  let fixture: ComponentFixture<CricketInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricketInfoComponent]
    });
    fixture = TestBed.createComponent(CricketInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

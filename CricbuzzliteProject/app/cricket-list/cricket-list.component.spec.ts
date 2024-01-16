import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketListComponent } from './cricket-list.component';

describe('CricketListComponent', () => {
  let component: CricketListComponent;
  let fixture: ComponentFixture<CricketListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricketListComponent]
    });
    fixture = TestBed.createComponent(CricketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

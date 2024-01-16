import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCricketComponent } from './update-cricket.component';

describe('UpdateCricketComponent', () => {
  let component: UpdateCricketComponent;
  let fixture: ComponentFixture<UpdateCricketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCricketComponent]
    });
    fixture = TestBed.createComponent(UpdateCricketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

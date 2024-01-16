import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCricketComponent } from './create-cricket.component';

describe('CreateCricketComponent', () => {
  let component: CreateCricketComponent;
  let fixture: ComponentFixture<CreateCricketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCricketComponent]
    });
    fixture = TestBed.createComponent(CreateCricketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

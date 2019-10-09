import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFrequencyComponent } from './user-frequency.component';

describe('UserFrequencyComponent', () => {
  let component: UserFrequencyComponent;
  let fixture: ComponentFixture<UserFrequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFrequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

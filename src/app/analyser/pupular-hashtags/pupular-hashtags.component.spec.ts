import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupularHashtagsComponent } from './pupular-hashtags.component';

describe('PupularHashtagsComponent', () => {
  let component: PupularHashtagsComponent;
  let fixture: ComponentFixture<PupularHashtagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupularHashtagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupularHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

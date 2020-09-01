import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotDescriptionComponent } from './shot-description.component';

describe('ShotDescriptionComponent', () => {
  let component: ShotDescriptionComponent;
  let fixture: ComponentFixture<ShotDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

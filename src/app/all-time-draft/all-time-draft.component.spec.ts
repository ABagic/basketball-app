import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeDraftComponent } from './all-time-draft.component';

describe('AllTimeDraftComponent', () => {
  let component: AllTimeDraftComponent;
  let fixture: ComponentFixture<AllTimeDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTimeDraftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTimeDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

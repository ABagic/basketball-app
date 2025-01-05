import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardOptionComponent } from './player-card-option.component';

describe('PlayerCardOptionComponent', () => {
  let component: PlayerCardOptionComponent;
  let fixture: ComponentFixture<PlayerCardOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerCardOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerCardOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

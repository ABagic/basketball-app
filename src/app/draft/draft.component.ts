import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { PlayerCardOptionComponent } from '../player-card-option/player-card-option.component';

@Component({
  selector: 'app-draft',
  standalone: true,
  imports: [
    RouterModule,
    PlayerCardComponent,
    PlayerCardOptionComponent,
    CommonModule,
  ],
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.css',
})
export class DraftComponent {
  @Input() players: any;
  position: string | null = null;
  selectedPosition: string | null = null;
  showOption: boolean | null = null;

  constructor() {
    this.showOption = true;
  }
}

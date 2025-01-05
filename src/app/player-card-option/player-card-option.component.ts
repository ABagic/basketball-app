import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player-card-option',
  standalone: true,
  imports: [],
  templateUrl: './player-card-option.component.html',
  styleUrl: './player-card-option.component.css',
})
export class PlayerCardOptionComponent {
  @Input() playerName: string = '';
  @Input() playerOverall: number = 0;
  @Input() playerPosition: string = '';
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-card-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-card-option.component.html',
  styleUrl: './player-card-option.component.css',
})
export class PlayerCardOptionComponent {
  @Input() playerName: string = '';
  @Input() playerOverall: number = 0;
  @Input() playerPosition: string = '';
  @Input() playerImage: string = '';

  @Output() dataToList = new EventEmitter<{
    name: string;
    overall: number;
    position: string;
    image: string;
  }>();

  sendData() {
    this.dataToList.emit({
      name: this.playerName,
      overall: this.playerOverall,
      position: this.playerPosition,
      image: this.playerImage,
    });
  }
}

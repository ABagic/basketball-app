import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { PlayerCardOptionComponent } from '../player-card-option/player-card-option.component';

@Component({
  selector: 'app-all-time-draft',
  standalone: true,
  imports: [
    RouterModule,
    PlayerCardComponent,
    PlayerCardOptionComponent,
    CommonModule,
  ],
  templateUrl: './all-time-draft.component.html',
  styleUrl: './all-time-draft.component.css',
})
export class AllTimeDraftComponent {
  @Input() players: any;
  position: string | null = null;
  selectedPosition: string | null = null;

  showOption: boolean | null = null;

  constructor() {
    this.showOption = true;
  }

  selectedPlayers: any[] = [];
  selectedPG: { name: string; overall: number; position: string } | any;
  selectedSG: { name: string; overall: number; position: string } | any;
  selectedSF: { name: string; overall: number; position: string } | any;
  selectedPF: { name: string; overall: number; position: string } | any;
  selectedC: { name: string; overall: number; position: string } | any;

  receiveData(data: any) {
    this.selectedPlayers.push(data);
    this.findItemByPosition();
  }

  playerSelected(position: string): boolean {
    return this.selectedPlayers.some((player) => player.position === position);
  }
  findItemByPosition() {
    this.selectedPG = this.selectedPlayers.find(
      (item) => item.position === 'POINT GUARD'
    );
    this.selectedSG = this.selectedPlayers.find(
      (item) => item.position === 'SHOOTING GUARD'
    );
    this.selectedSF = this.selectedPlayers.find(
      (item) => item.position === 'SMALL FORWARD'
    );
    this.selectedPF = this.selectedPlayers.find(
      (item) => item.position === 'POWER FORWARD'
    );
    this.selectedC = this.selectedPlayers.find(
      (item) => item.position === 'CENTER'
    );
  }
}

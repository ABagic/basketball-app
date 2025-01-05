import { Component, inject, Input } from '@angular/core';
import { PlayerList } from '../models/playerList.model';
import { CommonModule } from '@angular/common';
import { PlayersService } from '../services/players.service';
import { PlayerCardOptionComponent } from '../player-card-option/player-card-option.component';

@Component({
  selector: 'app-list-of-players',
  standalone: true,
  imports: [CommonModule, PlayerCardOptionComponent],
  templateUrl: './list-of-players.component.html',
  styleUrl: './list-of-players.component.css',
})
export class ListOfPlayersComponent {
  @Input() players: { name: string; overall: number }[] = [];
  @Input() position: string | null = null;
  @Input() listPosition: string | null = null;

  private playerService = inject(PlayersService);

  pointGuards: PlayerList[] = [];
  shootingGuards: PlayerList[] = [];
  smallForwards: PlayerList[] = [];
  powerForwards: PlayerList[] = [];
  centers: PlayerList[] = [];

  constructor() {
    this.playerService.getPointGuard().subscribe((players) => {
      this.pointGuards = players;
    });
    this.playerService.getShootingGuard().subscribe((players) => {
      this.shootingGuards = players;
    });
    this.playerService.getSmallForward().subscribe((players) => {
      this.smallForwards = players;
    });
    this.playerService.getPowerForward().subscribe((players) => {
      this.powerForwards = players;
    });
    this.playerService.getCenter().subscribe((players) => {
      this.centers = players;
    });
  }
  CardOptionClick() {
    this.position = '';
  }
}
export { PlayerList };

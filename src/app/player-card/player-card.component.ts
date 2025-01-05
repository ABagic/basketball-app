import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfPlayersComponent } from '../list-of-players/list-of-players.component';
import { PlayersService } from '../services/players.service';
import { PlayerList, PlayerOption } from '../models/playerList.model';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule, ListOfPlayersComponent],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css',
})
export class PlayerCardComponent {
  @Input() position: string = '';
  @Input() listPosition: string = '';
  showOptions = false;
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
  CardClick() {
    this.showOptions = true;
  }
}

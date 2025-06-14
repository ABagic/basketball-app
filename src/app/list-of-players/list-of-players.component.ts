import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
  ATPointGuards: PlayerList[] = [];
  ATShootingGuards: PlayerList[] = [];
  ATSmallForwards: PlayerList[] = [];
  ATPowerForwards: PlayerList[] = [];
  ATCenters: PlayerList[] = [];

  playerName: string | null = null;
  playerOverall: number | null = null;
  playerImage: string | null = null;
  showOption: boolean | null = null;

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
    this.playerService.getATPointGuard().subscribe((players) => {
      this.ATPointGuards = players;
    });
    this.playerService.getATShootingGuard().subscribe((players) => {
      this.ATShootingGuards = players;
    });
    this.playerService.getATSmallForward().subscribe((players) => {
      this.ATSmallForwards = players;
    });
    this.playerService.getATPowerForward().subscribe((players) => {
      this.ATPowerForwards = players;
    });
    this.playerService.getATCenter().subscribe((players) => {
      this.ATCenters = players;
    });
  }

  CardOptionClick() {
    this.showOption = false;
  }

  @Output() dataToCard = new EventEmitter<any>();

  receiveData(data: any) {
    this.dataToCard.emit(data);
  }
}
export { PlayerList };

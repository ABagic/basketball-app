import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { ListOfPlayersComponent } from '../list-of-players/list-of-players.component';

@Component({
  selector: 'app-draft',
  standalone: true,
  imports: [RouterModule, PlayerCardComponent, ListOfPlayersComponent],
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.css',
})
export class DraftComponent {
  @Input() players: any;
  position: string | null = null;

  loadComponent(listPosition: string) {
    this.position = listPosition;
  }
}

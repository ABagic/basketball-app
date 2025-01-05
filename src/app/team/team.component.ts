import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamList } from '../models/playerList.model';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  randomTeam: any;
  teams: TeamList[] = [
    { name: 'Atlanta Hawks', conference: 'East' },
    { name: 'Boston Celtics', conference: 'East' },
    { name: 'Brooklyn Nets', conference: 'East' },
    { name: 'Charlotte Hornets', conference: 'East' },
    { name: 'Chicago Bulls', conference: 'East' },
    { name: 'Cleveland Cavaliers', conference: 'East' },
    { name: 'Dallas Mavericks', conference: 'West' },
    { name: 'Denver Nuggets', conference: 'West' },
    { name: 'Detroit Pistons', conference: 'East' },
    { name: 'Golden State Warriors', conference: 'West' },
    { name: 'Houston Rockets', conference: 'West' },
    { name: 'Indiana Pacers', conference: 'East' },
    { name: 'Los Angeles Clippers', conference: 'West' },
    { name: 'Los Angeles Lakers', conference: 'West' },
    { name: 'Memphis Grizzlies', conference: 'West' },
    { name: 'Miami Heat', conference: 'East' },
    { name: 'Milwaukee Bucks', conference: 'East' },
    { name: 'Minnesota Timberwolves', conference: 'West' },
    { name: 'New Orleans Pelicans', conference: 'West' },
    { name: 'New York Knicks', conference: 'East' },
    { name: 'Oklahoma City Thunder', conference: 'West' },
    { name: 'Orlando Magic', conference: 'East' },
    { name: 'Philadelphia 76ers', conference: 'East' },
    { name: 'Phoenix Suns', conference: 'West' },
    { name: 'Portland Trail Blazers', conference: 'West' },
    { name: 'Sacramento Kings', conference: 'West' },
    { name: 'San Antonio Spurs', conference: 'West' },
    { name: 'Toronto Raptors', conference: 'East' },
    { name: 'Utah Jazz', conference: 'West' },
    { name: 'Washington Wizards', conference: 'East' },
  ];

  ngOnInit(): void {
    this.showRandomItem();
  }

  showRandomItem(): void {
    const randomListIndex = Math.floor(Math.random() * this.teams.length);
    this.randomTeam = this.teams[randomListIndex];
  }
}

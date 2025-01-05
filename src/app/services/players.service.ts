import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private Centers = 'C';
  private PowerForwards = 'PF';
  private SmallForwards = 'SF';
  private ShootingGuards = 'SG';
  private PointGuards = 'PG';
  constructor(private firestore: Firestore) {}

  getCenter(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.Centers);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }

  getPowerForward(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.PowerForwards);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }

  getSmallForward(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.SmallForwards);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }

  getShootingGuard(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.ShootingGuards);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }

  getPointGuard(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.PointGuards);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }
}

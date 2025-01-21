import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private PointGuards = 'PG';
  private ShootingGuards = 'SG';
  private SmallForwards = 'SF';
  private PowerForwards = 'PF';
  private Centers = 'C';

  private ATPointGuards = 'AT-PG';
  private ATShootingGuards = 'AT-SG';
  private ATSmallForwards = 'AT-SF';
  private ATPowerForwards = 'AT-PF';
  private ATCenters = 'AT-C';

  constructor(private firestore: Firestore) {}
  getPointGuard(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.PointGuards);
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

  getSmallForward(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.SmallForwards);
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
  getCenter(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.Centers);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }

  /*ALL TIME*/

  getATPointGuard(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.ATPointGuards);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }
  getATShootingGuard(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.ATShootingGuards);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }
  getATSmallForward(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.ATSmallForwards);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }
  getATPowerForward(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.ATPowerForwards);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }
  getATCenter(): Observable<any[]> {
    const playersCollection = collection(this.firestore, this.ATCenters);
    return collectionData(playersCollection, { idField: 'id' }).pipe(
      map((players: any[]) => {
        const shuffled = players.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
      })
    );
  }
}

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'basketball-app-6ea6d',
        appId: '1:978504630262:web:ab375d7236e1c363a211d7',
        storageBucket: 'basketball-app-6ea6d.firebasestorage.app',
        apiKey: 'AIzaSyCspX3YR2LNIvneY4Z15GGAdHj5_8hr3aQ',
        authDomain: 'basketball-app-6ea6d.firebaseapp.com',
        messagingSenderId: '978504630262',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};

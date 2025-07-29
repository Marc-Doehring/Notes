import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "notes-743fb", appId: "1:369084148248:web:b0e24ec0657a1ab538716d", storageBucket: "notes-743fb.firebasestorage.app", apiKey: "AIzaSyCjcpodpQxWyh0m9QUm9VtceAsOWA9OnBc", authDomain: "notes-743fb.firebaseapp.com", messagingSenderId: "369084148248", measurementId: "G-TXPFQYV5L5" })), provideFirestore(() => getFirestore()),
  ]
};

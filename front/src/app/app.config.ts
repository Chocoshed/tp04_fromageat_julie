import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

// TODO : Utilisation de l’environnement Angular pour configurer l’URL de l’API selon l’environnement (dev/prod).
const API_URL = 'https://tp-4-latest.onrender.com/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: 'API_URL', useValue: API_URL }, // Fournir l'URL de l'API comme dépendance injectable
    importProvidersFrom(HttpClientModule) // Importer HttpClientModule pour activer HttpClient
  ]
};

import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CO';
import localeFr from '@angular/common/locales/fr';
import { LocaleService } from './services/locale.service';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // De esta forma es que se puede cambiar dinamicamente el idioma local de nuestra aplicacion, en este caso debvemos crear un servicio que maneje ese valor
    {
      provide: LOCALE_ID,
      //useValue: 'es',
      deps: [LocaleService],
      useFactory: (localService: LocaleService) => localService.getLocale,
    },
  ],
};

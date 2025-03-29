import { Injectable, signal } from '@angular/core';

export type locale = 'es' | 'fr' | 'en';

@Injectable({providedIn: 'root'})
export class LocaleService {

  // Este servivio fue creado para manejar el idioma local de nuestra aplicacion dinamicamente para que el usuario lo pueda cambiar

  private currentLocal = signal<locale>('es');

  constructor(){
    this.currentLocal.set(localStorage.getItem('locale') as locale ?? 'es');
  }

  get getLocale(){
    return this.currentLocal()
  }

  changeLocale(locale: locale ){
    if (this.currentLocal() === locale) return;
    localStorage.setItem('locale', locale);
    this.currentLocal.set(locale);
    window.location.reload();
  }

}

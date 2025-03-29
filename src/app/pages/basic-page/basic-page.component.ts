import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { locale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal<string>('julian');
  nameUpper = signal<string>('JULIAN');
  fullName = signal<string>('juLiAN guARnIzO');

  customDate = signal<Date>(new Date());


  tickingDateEffect = effect((Oncleanup) => {

    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    },1000);

    Oncleanup(() => {
      clearInterval(interval);
    })

  });

  changeLocale(local: locale){
    this.localeService.changeLocale(local);
  }
}

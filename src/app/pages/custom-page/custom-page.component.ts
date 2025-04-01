import { Component, signal } from '@angular/core';
import { TogglePipe } from '../../pipes/toggle-case.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { heroes } from '../../hero.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [TogglePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe, HeroSortByPipe, HeroFilterPipe],
  templateUrl: './custom-page.component.html',
  styles: ``
})
export class CustomPageComponent {

  name = signal<string>('Julian');
  upperCase = signal<boolean>(true);
  heroes = signal<Hero[]>(heroes);
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal<string>('');


  changeUpperCase(){
    this.upperCase.update(uppercase => !uppercase);
  }
}

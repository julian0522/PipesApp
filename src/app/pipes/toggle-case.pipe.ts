import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class TogglePipe implements PipeTransform {

  transform(value: string, upper: boolean = true): string {

    return upper ? value.toUpperCase() : value.toLowerCase();
  }
}

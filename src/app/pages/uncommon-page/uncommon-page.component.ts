import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';


const clien1 = {
  name: 'Julian',
  gender: 'male',
  age: 22,
  address: 'Ibague, Colombia'
}

const clien2 = {
  name: 'Maria',
  gender: 'female',
  age: 21,
  address: 'Ibague, Colombia'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {

  //* i18n Select PIPE
  client = signal(clien1);

  invitationMap = {
    male: 'Invitarlo',
    female: 'Invitarla'
  }

  changeClient(){
    if ( this.client() === clien1 ) {
      this.client.set(clien2);
      return;
    };

    this.client.set(clien1);
  }

  //*i18n Plural PIPE
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal<string[]>([
    'Julian',
    'Maria',
    'Betsy',
    'German',
    'Pedro',
    'Fernando',
    'Natalia',
    'Diana',
    'Carlos',
  ]);

  deleteClient(){
    this.clients.update(clients => clients.slice(1) );
  }

  //* KEYVALUE PIPE
  profile = {
    name: 'Julian',
    age: 22,
    addres: 'Ibague, Colombia'
  }

  //* ASYNC PIPE
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('promesa finalizada');
    },3500);
  });

  myObservableTimer = interval(2000)
    .pipe(
      tap((value) => console.log('tap', value))
    );

}

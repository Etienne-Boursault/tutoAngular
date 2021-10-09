import { Component} from '@angular/core';
import { Observable } from 'rxjs'; // Besoin d'installer le package rxjs-compat via la commande "npm install --save rxjs-compat"
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  secondes: number = 0;

  ngOnInit() {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error: string) => {
        console.log('Uh-oh, an error occured! : ' + error);
      }, 
      () => {
        console.log('Observable complete!');
      }
    )
  }
}

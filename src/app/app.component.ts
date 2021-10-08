import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  isAuth = false;
  
posts= [
  {
    title : 'Premier post'
  },
  {
    title : 'Deuxième post'
  },
  {
    title : 'Troisième post'
  }
]

  constructor() { }

  onAllumer() {
    console.log('On allume tout !');
  }
}

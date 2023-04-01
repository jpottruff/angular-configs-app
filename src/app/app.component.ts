import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-configs-app';

  fakeFun() {
    this.title = ' alksjhdflkjasdkfjhalskdfhlkjasdhfkajlshfakjlshdfaskjdaf';

    console.log('hi');
    const thing = 1;

    const stuff = 'hi';
  }
}

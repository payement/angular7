import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid jumbotron">
      <h1>Hello Angular 7</h1>
      <hello [name]="name"></hello>
    </div>`,
  styles: [`
    p { font-family: Lato; }
  `]
})
export class AppComponent  {
  name = 'Allen Kim';
}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `
    <div class="container-fluid">
      <div class="jumbotron">
        <h1>Hello Angular 7</h1>
        My name is {{name}}.
      </div>
      <oneview-header></oneview-header>
    </div>`,
  styles: [`
    p {
      font-family: Lato;
    }`]
})
export class AppComponent  {
  name = 'Allen Kim';
}

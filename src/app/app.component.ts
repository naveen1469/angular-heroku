import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
    // <div><h1>{{title}}</h1>
    //   <h3>The root component : AppComponent</h3>
    //   <app-products></app-products>
    // </div>
  //   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PRODUCT VIEWER';
}

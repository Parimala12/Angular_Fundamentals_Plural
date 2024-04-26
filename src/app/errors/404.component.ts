import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">Server Error: 404</h1>
  `,
  styles: [`
    .errorMessage { 
      margin-top:130px; 
      font-size: 70px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor() {

  }

}
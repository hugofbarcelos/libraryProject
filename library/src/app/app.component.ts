import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome</h1>
    <nav>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/products']">Products</a>
      <a [routerLink]="['/contact']">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1{
      display: flex;
      justify-content: center;
    }
    nav {
      display: flex;
      justify-content: space-around;
      flex-wrap:wrap;
      padding: 14px;
      font-size: 20px;
    }
    a{
      padding: 0.4em 2em;
      border-radius: 20px;
      color: black;
      background-color: cyan;
      text-decoration: none;
      font-size: 1.1em;
      border: 0;
      cursor: pointer;
      margin: 1em;
      text-align: center;
    }

  `]
})
export class AppComponent {

  constructor(private router: Router){

  }

  navigateToUrl(){
    this.router.navigate(['/products']);
  }

}

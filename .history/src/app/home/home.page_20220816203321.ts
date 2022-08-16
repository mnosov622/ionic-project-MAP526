import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartPage } from '../shopping-cart/shopping-cart.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  history: any = JSON.parse(localStorage.getItem('history'));
  constructor(public router: Router) {}
  gotToShopping(){
    this.router.navigate(['/shopping-cart']);
  }
  gotToResults(){
    this.router.navigate(['/results']);
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
  }

  
  gotToHome(){
    this.router.navigate(['/home']);
  }

}

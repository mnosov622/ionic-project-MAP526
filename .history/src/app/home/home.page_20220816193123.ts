import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartPage } from '../shopping-cart/shopping-cart.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, public http:HttpClient) {}

  gotToShopping(){
    this.router.navigate(['/shopping-cart']);
  }
  gotToResults(){
    this.router.navigate(['/results']);
  }

  query:string='';
  apikey = '8C1D5A761F1D4A78B659624BB1218953';
  url = 'https://api.countdownapi.com/request?api_key='+this.apikey+'&type=search&ebay_domain=ebay.com&search_term='+ this.query;

  getData(){
    
    this.http.get(url).subscribe((res)=>{
      this.data = res;
  }
}

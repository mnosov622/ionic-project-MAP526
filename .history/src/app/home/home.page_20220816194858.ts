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

  data: Array<any> =[];
  query = '';
  constructor(private router: Router, private http: HttpClient) {}

  gotToShopping(){
    this.router.navigate(['/shopping-cart']);
  }
  gotToResults(){
    this.router.navigate(['/results']);
  }

  getData(){
    const apikey = '8C1D5A761F1D4A78B659624BB1218953';
    const url = 'https://api.countdownapi.com/request?api_key='+apikey+'&type=search&ebay_domain=ebay.com&search_term='+ this.query;
    this.http.get(url).subscribe((res)=>{
      console.log(res);
      this.data = res;
      // this.data.search_results = res;
      // console.log(this.data.search_results);
      // this.data.search_results.forEach(items => {
      //   console.log(items);
      // });
    });
  }
}
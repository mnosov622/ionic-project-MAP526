import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EbayService {

  apikey = '8C1D5A761F1D4A78B659624BB1218953'
  url = 'https://api.countdownapi.com/request?api_key='+this.apikey+'&type=search&ebay_domain=ebay.com&search_term='
  //url = 'https://api.serpwow.com/search?api_key=028C26E0456C4019B8DAC7393213560C&engine=ebay&ebay_domain=ebay.com&q='
  url2 = 'https://api.countdownapi.com/request?api_key='+this.apikey+'&type=product&ebay_domain=ebay.com&epid='
  
   
  constructor(private http: HttpClient) { }

  searchData(title: string){
    const ebayurl = this.url + title;
    return this.http.get(ebayurl).pipe(map(data=> data['search_results']));
  }

  getDetails(id: string){
    const productUrl = this.url2 + id;
    console.log(productUrl);
    return this.http.get(productUrl);
    
  }
}

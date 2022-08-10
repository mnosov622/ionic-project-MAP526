import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EbayService {

  apikey = '8C1D5A761F1D4A78B659624BB1218953'
  url = 'https://api.countdownapi.com/request?api_key='+this.apikey+'&type=search&ebay_domain=ebay.com&search_term='

   
  constructor(private http: HttpClient) { }

  searchData(title: string){
    const ebayurl = this.url + title;
    return this.http.get(ebayurl).pipe(map(data=> data['search_results']));
  }
}

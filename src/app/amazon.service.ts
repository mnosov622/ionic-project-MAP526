import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  apikey = '780E6F45A029446B9F26A94D85541AEC'
  url = 'https://api.rainforestapi.com/request?api_key='+this.apikey+'&type=search&amazon_domain=amazon.com&search_term='
  asinUrl = 'https://api.rainforestapi.com/request?api_key='+this.apikey+'&type=product&amazon_domain=amazon.com&asin='

   
  constructor(private http: HttpClient) { }

  searchData(title: string){
    const amazonurl = this.url + title;
    return this.http.get(amazonurl).pipe(map(data=> data['search_results']));
  }

  getDetails(id: string){
    const productUrl = this.asinUrl + id;
    console.log(productUrl);
    return this.http.get(productUrl);
    
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  apikey = '66B0E667B1524819B5025C371F6510C7'
  url = 'https://api.rainforestapi.com/request?api_key='+this.apikey+'&type=search&amazon_domain=amazon.com&search_term='

   
  constructor(private http: HttpClient) { }

  searchData(title: string){
    const amazonurl = this.url + title;
    return this.http.get(amazonurl).pipe(map(data=> data['search_results']));
  }
}

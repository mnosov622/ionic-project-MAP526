import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AmazonService } from '../amazon.service';
import { EbayService } from '../ebay.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  searchTerm: string;
  results: Observable<any>;
  results2: Observable<any>;
  amazon = "amazon";
  ebay = "ebay";
  constructor(public router: Router, private amazonService: AmazonService, private ebayService: EbayService) {}

  ngOnInit() {
  }

  searchChanged(){
   this.results = this.amazonService.searchData(this.searchTerm) ;
   this.results2 = this.ebayService.searchData(this.searchTerm);
   console.log(this.results);
  }
  gotToHome(){
    this.router.navigate(['/home']);
  }
  gotToDetails(){
    this.router.navigate(['/details']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AmazonService } from '../amazon.service';
import { EbayService } from '../ebay.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  searchTerm: string;
  result: any;
  results: any;
  results2: any;
  constructor(public router: Router, private amazonService: AmazonService, private ebayService: EbayService,
     private activatedRoute: ActivatedRoute) {

     }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.results = this.amazonService.getDetails(id) ;
    
    console.log(id);
    this.amazonService.getDetails(id).subscribe(data => this.results = data);
    this.ebayService.getDetails(id).subscribe(data => this.results2 = data);
  }   
  // ngOnInit() {
  //   this.activatedRoute.paramMap.subscribe(
  //     paramMap => {
  //       const itemDetail = paramMap.get('item');
  //       this.result = paramMap.get('item');
  //     }
  //   );
  // }

  // searchChanged(){
  //   console.log(this.results);
  //  this.results = this.amazonService.searchData(this.searchTerm) ;
  //  this.results2 = this.ebayService.searchData(this.searchTerm);
  //  console.log(this.results);
  // }

  gotToResults(){
    this.router.navigate(['/results']);
  }

}

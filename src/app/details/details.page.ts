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
  title: string;
  image: string;
  price: string;
  link: string;
  //results: any;
  //results2: any;
  constructor(public router: Router, private amazonService: AmazonService, private ebayService: EbayService,
     private activatedRoute: ActivatedRoute) {

     }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
    this.price = this.activatedRoute.snapshot.paramMap.get('price');
    this.image = this.activatedRoute.snapshot.paramMap.get('image');
    this.link = this.activatedRoute.snapshot.paramMap.get('link');
    //this.results = this.amazonService.getDetails(id) ;
    
    //console.log(id);
    //this.amazonService.getDetails(id).subscribe(data => this.results = data);

    //this.ebayService.getDetails(id).subscribe(data => this.results = data);


    
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

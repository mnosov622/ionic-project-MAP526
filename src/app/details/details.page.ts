import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AmazonService } from '../amazon.service';
import { EbayService } from '../ebay.service';
import { StorageService } from '../storage.service';

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
     private activatedRoute: ActivatedRoute, private storage: StorageService) {

     }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
    this.price = this.activatedRoute.snapshot.paramMap.get('price');
    this.image = this.activatedRoute.snapshot.paramMap.get('image');
    this.link = this.activatedRoute.snapshot.paramMap.get('link');
  }

  ionViewDidLeave(){
    this.storage.getAllCartItems();
  }

  saveToCart(){
    this.storage.saveNewCart(this.title, this.price, this.image, this.link);
  }

  gotToResults(){
    this.router.navigate(['/results']);
  }

}

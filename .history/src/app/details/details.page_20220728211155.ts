import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  openDetails() {
    this.navCtrl.push('FilmDetailsPage');
  }
  goToPlanets() {
    this.navCtrl.parent.select(2);
  }

}

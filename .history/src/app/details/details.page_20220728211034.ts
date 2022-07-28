import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  ngOnInit() {
  }

  openDetails() {
    this.navCtrl.push('FilmDetailsPage');
  }
  goToPlanets() {
    this.navCtrl.parent.select(2);
  }

}

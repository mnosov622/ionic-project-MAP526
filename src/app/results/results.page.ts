import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
  }

  
  gotToHome(){
    this.router.navigate(['/home']);
  }
  gotToDetails(){
    this.router.navigate(['/details']);
  }
}

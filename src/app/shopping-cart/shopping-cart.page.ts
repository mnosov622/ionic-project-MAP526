import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Cart } from '../cart.model';
import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit {
  cart: Cart[];
  totalPrice:string;
  constructor(public location: Location, private storage: StorageService, private alertController: AlertController) {}

  ngOnInit() {
    this.cart = this.storage.getAllCartItems();
    this.cart.forEach(function(value){

      this.totalPrice += value.price
    })
  }

  ionViewWillEnter(){
    this.cart = this.storage.getAllCartItems();
    console.log(this.cart.length)
    this.cart.forEach(function(value){
      this.totalPrice += value.price
    })
  }

  ionViewDidEnter(){
    this.cart = this.storage.getAllCartItems();
    this.cart.forEach(function(value){
      console.log(value.price)
      this.totalPrice += value.price
      //this.totalPrice += value.price;
    })
  }

  deleteCart(){

    this.alertController.create({
      header: 'Warning!',
      message : 'Are sure you want to delete all items? ',
      buttons: [{
        text :'delete',
        handler : ()=>{
          this.storage.deleteAll();
          this.cart = this.storage.getAllCartItems();
        }
      },'Cancel']

    }).then(alert => {
      alert.present();
    })
  }

  deleteItem(itemToDelete: Cart){
console.log(itemToDelete);
      this.alertController.create({
      header: 'Warning!',
      message : 'Are sure you want to delete? ',
      buttons: [{
        text :'delete',
        handler : ()=>{
          this.storage.deleteOneItem(itemToDelete);
          this.cart = this.storage.getAllCartItems();
        }
      },'Cancel']

    }).then(alert =>{
      alert.present();
    });

  }
  
  myBackButton(){
    this.location.back();
  }

}


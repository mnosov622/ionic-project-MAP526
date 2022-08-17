import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Cart } from './cart.model';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    await this.storage.create()
  }

  saveNewCart(title: string, price: string, image: string, link: string){
    var newCart = new Cart(title, price, image, link);
    this.storage.set(link, newCart);
  }

  getAllCartItems(){
    var allCartItems: Cart[] = [];
    this.storage.forEach((value, key, index) => {
      allCartItems.push(value as Cart);
    });
    return allCartItems;
  }

  deleteAll(){
    this.storage.clear();
  }

  deleteOneItem(cart: Cart){
    this.storage.remove(cart.link);
  }
}

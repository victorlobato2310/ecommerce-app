import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ILocalStorageSource } from '../models/local-storage-source.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorageSource$ = new Subject<ILocalStorageSource>();
  items: any[] =  [];

  constructor() {}

  set(key: string, value: any) {
    if(localStorage.getItem(key)){
      this.items = JSON.parse(localStorage.getItem(key) ?? "");
      this.items = [...this.items, value];
    }

    if(this.items.length === 0) {
      this.items.push(value);
    }

    localStorage.setItem(key, JSON.stringify(this.items));
    this.localStorageSource$.next({ count: this.items.length, items: this.items });
  }

  get(key: string = "shoppingCart") {
    if(localStorage.getItem(key)) {
      this.items = JSON.parse(localStorage.getItem(key) ?? "");
    }

    this.localStorageSource$.next({ count: this.items.length, items: this.items });
  }

  delete(key: string, value: any) {
    this.items = JSON.parse(localStorage.getItem(key) ?? "");
    let updatedItems = this.items.filter((item: any) => item.id != value.id);

    localStorage.setItem(key, JSON.stringify(updatedItems));
    this.localStorageSource$.next({ count: updatedItems.length, items: updatedItems });
  }

  clearAll(){
    localStorage.clear();
  }
}

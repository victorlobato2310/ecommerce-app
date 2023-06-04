import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILocalStorageSource } from '@app/models/local-storage-source.model';
import { LocalStorageService } from '@app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string = "Capputeeno";
  searchUrl: string = "assets/search-loupe.svg";
  cartUrl: string = "assets/cart.svg";
  notificationUrl: string = "assets/notification.svg";
  shoppingCartItemsCount!: number;
  selectedItems: any[] = [];

  constructor(private __localStorageService: LocalStorageService){}

  ngOnDestroy(){
    this.__localStorageService.localStorageSource$.unsubscribe();
  }

  ngOnInit(): void {
    let shoppingCartInterval = setInterval(() => {
      this.__localStorageService.get();
      clearInterval(shoppingCartInterval);
    }, 1000);

    this.__localStorageService.localStorageSource$.subscribe(({ count, items }: ILocalStorageSource) => {
      this.shoppingCartItemsCount = count;
      this.selectedItems = items;
    });
  }

}

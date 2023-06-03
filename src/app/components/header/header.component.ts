import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISessionStorageSource } from 'src/app/models/session-storage-source.model';
import { SessionStorageService } from 'src/app/services/session-storage.service';

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

  constructor(private __sessionStorageService: SessionStorageService){}

  ngOnDestroy(){
    this.__sessionStorageService.sessionStorageSource$.unsubscribe();
  }

  ngOnInit(): void {
    let shoppingCartInterval = setInterval(() => {
      this.__sessionStorageService.get();
      clearInterval(shoppingCartInterval);
    }, 1000);

    this.__sessionStorageService.sessionStorageSource$.subscribe(({ count, items }: ISessionStorageSource) => {
      this.shoppingCartItemsCount = count;
      this.selectedItems = items;
    });
  }

}

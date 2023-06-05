import { Component, OnInit } from '@angular/core';
import { MenuItemType } from '@src/app/enums/menu-item-type.enum';
import { IMenuItem } from '@src/app/models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: IMenuItem[] = [
    { name: "Todos os produtos", isActived: true, type: MenuItemType.ALL },
    { name: "Camisetas", isActived: false, type: MenuItemType.TSHIRTS },
    { name: "Canecas", isActived: false, type: MenuItemType.MUGS }
  ];

  selectedItem: MenuItemType = MenuItemType.ALL;

  constructor(){}

  ngOnInit(): void {}

  setActivedItem(item: IMenuItem, itemIndex: number) {
    this.menuItems.map((item: IMenuItem) => {
      item.isActived = false;
      return item;
    }).map((item: IMenuItem, index: number) => {
      if(index === itemIndex) {
        item.isActived = true;
      }
      return item;
    });

    this.selectedItem = item.type;
  }
}

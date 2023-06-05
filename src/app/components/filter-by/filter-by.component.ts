import { Component, OnInit } from '@angular/core';
import { FilterByItemType } from '@src/app/enums/filter-by-item-type.enum';
import { IFilterByItem } from '@src/app/models/filter-by-item.model';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss']
})
export class FilterByComponent implements OnInit {

  filterItems: IFilterByItem[] = [
    { name: "Novidades", type: FilterByItemType.NEWS },
    { name: "Preço: Maior - menor", type: FilterByItemType.BIGGEST_PRICE },
    { name: "Preço: Menor - maior", type: FilterByItemType.LOWEST_PRICE },
    { name: "Mais vendidos", type: FilterByItemType.BEST_SELLING }
  ];

  arrowUrl: string = "assets/arrow.svg";
  isOpenFilterBox: boolean = false;

  selectedItem!: FilterByItemType;

  constructor(){}

  ngOnInit(): void {
  }

  openFilterBox(){
    this.isOpenFilterBox = !this.isOpenFilterBox;
  }

  setSelectedItem(item: IFilterByItem){
    this.selectedItem = item.type;
  }

}

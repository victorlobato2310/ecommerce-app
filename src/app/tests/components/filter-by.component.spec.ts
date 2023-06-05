import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByComponent } from '@app/components/filter-by/filter-by.component';
import { FilterByModule } from '@src/app/components/filter-by/filter-by.module';
import { FilterByItemType } from '@src/app/enums/filter-by-item-type.enum';
import { IFilterByItem } from '@src/app/models/filter-by-item.model';
import "@src/test-setup";

describe('FilterByItemTypeFilterByItemType', () => {
  let component: FilterByComponent;
  let fixture: ComponentFixture<FilterByComponent>;
  let mockFilterItems: IFilterByItem[] = [
    { name: "Novidades", type: FilterByItemType.NEWS },
    { name: "Preço: Maior - menor", type: FilterByItemType.BIGGEST_PRICE },
    { name: "Preço: Menor - maior", type: FilterByItemType.LOWEST_PRICE },
    { name: "Mais vendidos", type: FilterByItemType.BEST_SELLING }
  ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterByComponent],
      imports: [FilterByModule]
    });
    fixture = TestBed.createComponent(FilterByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit() method', () => {
    jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
  });

  it('should call openFilterBox() method and change component.isOpenFilterBox value to TRUE', () => {
    jest.spyOn(component, 'openFilterBox');
    expect(component.isOpenFilterBox).toBeFalsy();
    component.openFilterBox();
    expect(component.isOpenFilterBox).toBeTruthy();
    expect(component.openFilterBox).toHaveBeenCalled();
    expect(component.openFilterBox).toHaveBeenCalledTimes(1);
  });

  it('should call setSelectedItem() method and select an item from component.filterItems', () => {
    jest.spyOn(component, 'setSelectedItem');
    expect(component.selectedItem).toBeUndefined();
    expect(component.filterItems).toBeDefined();
    expect(component.filterItems.length).toBeGreaterThan(0);

    let mockItem = mockFilterItems[1];
    component.setSelectedItem(mockItem);

    expect(component.selectedItem).toBe(mockItem.type);
    expect(component.setSelectedItem).toHaveBeenCalledWith(mockItem);
    expect(component.setSelectedItem).toHaveBeenCalled();
    expect(component.setSelectedItem).toHaveBeenCalledTimes(1);
  });
});

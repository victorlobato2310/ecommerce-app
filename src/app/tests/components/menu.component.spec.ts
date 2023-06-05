import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from '@app/components/menu/menu.component';
import { FilterByModule } from '@src/app/components/filter-by/filter-by.module';
import { MenuModule } from '@src/app/components/menu/menu.module';
import { MenuItemType } from '@src/app/enums/menu-item-type.enum';
import { IMenuItem } from '@src/app/models/menu-item.model';
import "@src/test-setup";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let mockMenuItems: IMenuItem[] = [
    { name: "Todos os produtos", isActived: true, type: MenuItemType.ALL },
    { name: "Camisetas", isActived: false, type: MenuItemType.TSHIRTS },
    { name: "Canecas", isActived: false, type: MenuItemType.MUGS }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [MenuModule, FilterByModule]
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit() method and set a selectedItem = ALL as default', () => {
    jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.selectedItem).toBe(MenuItemType.ALL);
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
  });

  it('should call setActivedItem() method and set a selectedItem', () => {
    expect(component.selectedItem).toBe(MenuItemType.ALL);
    expect(component.menuItems[0].isActived).toBeTruthy();

    jest.spyOn(component, 'setActivedItem');
    let selectedItem = mockMenuItems[1];
    component.setActivedItem(selectedItem, 1);

    expect(component.setActivedItem).toHaveBeenCalledWith(selectedItem, 1);
    expect(component.setActivedItem).toHaveBeenCalled();
    expect(component.setActivedItem).toHaveBeenCalledTimes(1);
    expect(component.selectedItem).not.toBe(MenuItemType.ALL);
    expect(component.menuItems[0].isActived).toBeFalsy();
    expect(component.selectedItem).toBe(selectedItem.type);
    expect(component.menuItems[1].isActived).toBeTruthy();
  });
});

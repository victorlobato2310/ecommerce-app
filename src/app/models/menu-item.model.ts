import { MenuItemType } from "../enums/menu-item-type.enum";

export interface IMenuItem {
  name: string;
  isActived: boolean;
  type: MenuItemType
}

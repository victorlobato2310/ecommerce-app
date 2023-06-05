export interface IFilterByItem {
  name: string;
  type: FilterByItemType
}
export enum FilterByItemType {
  ALL = 'all',
  BIGGEST_PRICE = 'biggest price',
  LOWEST_PRICE = 'lowest price',
  BEST_SELLING = 'best selling'
}

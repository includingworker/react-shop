export enum SortPropertyEnum {
  DATE = "date",
  RATING = "rating",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

export type Filter = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  categoryId: number;
  sort: Filter;
}

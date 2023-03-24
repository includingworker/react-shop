export type Item = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
  date: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type SearchItemParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
};

export interface ItemSliceState {
  items: Item[];
  status: Status;
}

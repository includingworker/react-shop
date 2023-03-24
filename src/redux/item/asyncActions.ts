import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Item, SearchItemParams } from "./types";

export const fetchItems = createAsyncThunk<Item[], SearchItemParams>(
  "item/fetchItemsStatus",
  async (params) => {
    const { sortBy, order, category, search } = params;
    const { data } = await axios.get<Item[]>(
      `https://63c83bede52516043f4e9cbf.mockapi.io/items?category=${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

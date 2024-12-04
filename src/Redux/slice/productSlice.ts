import axios from "axios";
import { ProductsProps } from "./../../types/Products";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: ProductsProps = {
  products: [],
  status: "idle",
  error: null,
};

export const getProductList = createAsyncThunk(
  "products/getProductList",
  async () => {
    const res = await axios.get("https://foodish-api.com");
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    toggleLike: (state, action) => {
      const product = state.products.find((el) => el.id === action.payload);
      if (product) {
        product.liked = !product.liked;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((el) => el.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addProduct, deleteProduct, toggleLike } = productSlice.actions;
export default productSlice.reducer;

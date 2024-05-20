import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  products: [],
  loading: false,
  error: "",
};
const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return api.get("/products");
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      (state.error = action.message || "Something went wrong!"),
        (state.loading = false);
      state.products = [];
    });
  },
});
export default productSlice.reducer;
export{fetchProducts};
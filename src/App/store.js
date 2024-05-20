import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
const store=configureStore({
      reducer:{
            product:productSlice,
            cart: cartReducer,
      }
})
export default store;
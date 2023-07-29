
import cartReducer from "../features/Cart/cartSlice";
import modalReducer from "../features/Modal/modalSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    
  }
})
export default store;
import { configureStore } from "@reduxjs/toolkit";
import thaliReducer from "../reducers/slice";
export const store = configureStore({
  reducer:{
    thali: thaliReducer,
  }
})
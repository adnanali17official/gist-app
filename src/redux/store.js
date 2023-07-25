import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const reducer = combineReducers({
  user: userSlice.reducer,
});

const store = configureStore({ reducer });

export default store;

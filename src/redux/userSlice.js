import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  searchValue: [],
  notFound: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set(state, action) {
      state.value = [...action.payload];
    },
    setSearch(state, action) {
      state.searchValue = [...action.payload];
    },
    notFound(state, action) {
      state.notFound = action.payload;
    },
  },
});

export const { set, setSearch, notFound } = userSlice.actions;
export default userSlice;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  searchValue: [],
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
  },
});

export const { set, setSearch } = userSlice.actions;
export default userSlice;

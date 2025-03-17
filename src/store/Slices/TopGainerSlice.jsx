import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topGainer: [],
};

const topGainerSlice = createSlice({
  name: "topGainer",
  initialState,
  reducers: {
    setTopGainer(state, action) {
      state.topGainer = action.payload;
    },
    getTopGainer(state) {
      return state.topGainer;
    },
  },
});

export default topGainerSlice;
export const { setTopGainer, getTopGainer } = topGainerSlice.actions;



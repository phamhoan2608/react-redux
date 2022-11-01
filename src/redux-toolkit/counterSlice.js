import { createSlice } from "@reduxjs/toolkit";
import count from "../data/count.json";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count:
      Number(window.localStorage.getItem("count")) !== 0
        ? Number(window.localStorage.getItem("count"))
        : count.value,
  },
  reducers: {
    increment: (state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    decrement: (state) => ({
      ...state,
      count: state.count - 1,
    }),
    current: (state) => ({
      ...state,
      count: state.count,
    }),
  },
});

export const { increment, decrement, current } = counterSlice.actions;
export default counterSlice.reducer;

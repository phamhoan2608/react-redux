import {createSlice} from "@reduxjs/toolkit";
import count from '../data/count.json'
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: Number(window.localStorage.getItem("count")) !== 0 ? Number(window.localStorage.getItem("count")) : count.value
  },
  reducers: {
    increment: (state) => {
      console.log("state", state.count)
      return {
      ...state, count: state.count + 1,
    }}
    ,
    decrement: (state) => ({
      ...state, count: state.count - 1})
  }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer
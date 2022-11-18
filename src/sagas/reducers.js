import { combineReducers } from "@reduxjs/toolkit";
import hackerNewSlice from "./hackerNew/hackerNewSlice";
import newSlice from "./news/newSlice";

export const reducer = combineReducers({
  news: newSlice, 
  //hackerNew: hackerNewSlice
})
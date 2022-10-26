import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementValue } from "../redux/counter";

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementValue = () => {
    dispatch(incrementValue(10))
  }
  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <div className="flex flex-col items-center p-5 bg-white shadow max-w-[600px] mx-auto mt-10">
      <h2 className="text-orange-300 mb-5">Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button className="p-5 border border-gray-200" onClick={handleIncrement}>Increment</button>
        <button className="p-5 border border-gray-200" onClick={handleDecrement}>Decrement</button>
        <button className="p-5 border border-gray-200" onClick={handleIncrementValue}>Increment 10</button>
      </div>
    </div>
  );
};

export default Counter;

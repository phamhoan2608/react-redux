import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  // const [count, setCount] = useState(0);
  
  const {count} = useSelector(state => state.counter);
  return <div>
    <h2>The count from App: {count}</h2>
    <Counter />
  </div>;
}

export default App;

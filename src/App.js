import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
// import Counter from "./components/Counter";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
// import { toggleDarkMode } from "./redux-toolkit/globalSlice";

function App() {
  // const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useDarkMode();
  // const {count} = useSelector((state) => state.counter);
  const globalOption = useSelector((state) => state.global);
  //console.log("globalOption",globalOption);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDarkMode(darkMode))
  },[])
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode)
    dispatch(toggleDarkMode(darkMode));
  };
  // console.log(globalOption);
  //console.log(darkMode)
  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <h2>The count from App: {window.localStorage.getItem("count")}</h2>
    <Counter />
      {/* <Card></Card> */}
      <button
        onClick={handleToggleDarkMode}
        className="w-[40%] mt-4 h-[50px] bg-blue-600 hover:bg-blue-900 text-white rounded-lg"
      >
        Change dark mode
      </button>
    </div>
  );
}

export default App;

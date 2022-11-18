import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ButtonMenu from "./components/ButtonMenu";
import Card from "./components/Card";
import Counter from "./components/Counter";
import DatePicker from "./components/DatePicker";
import HackerNews from "./components/HackerNews";
import Sidebar from "./components/Sidebar";
// import Counter from "./components/Counter";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import { getHackerNew } from "./sagas/hackerNew/hackerNewSlice";
import { getNews } from "./sagas/news/newSlice";
// import { toggleDarkMode } from "./redux-toolkit/globalSlice";

function App() {
  console.log("re-load")
  // const [count, setCount] = useState(0);
  //const [darkMode, setDarkMode] = useDarkMode();
  // const {count} = useSelector((state) => state.counter);
  //const globalOption = useSelector((state) => state.global);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(toggleDarkMode(darkMode));
  // }, []);
  // const handleToggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   dispatch(toggleDarkMode(darkMode));
  // };
  //------------- Start Generator function-----------------------//
  // useEffect(() => {
  //   function* demoGenerator() {
  //     console.log("running");
  //     let id = 1
  //     while(true) {
  //       yield id;
  //       id++;
  //     }
  //   }
  //   const gen = demoGenerator();
  //   console.log(gen.next())
  //   console.log(gen.next())
  //   // console.log(gen.throw( new Error("Error")))
  // },[])
//------------- End Generator function-----------------------//
//----------------Start Redux-saga---------------------------//
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getNews())
//     dispatch(getHackerNew())
//   },[dispatch])
// // const {hits} = useSelector((state) => state.news)
// const hits = useSelector((state) => state.hackerNew.hits)
//   console.log(hits)
//----------------End Redux-saga---------------------------//
  return (
    <div>
       {/* <Sidebar/>
       <ButtonMenu/>      */}
       <HackerNews/>
       {/* <DatePicker /> */}
    </div>

    // <div className="flex flex-col justify-center align-middle items-center">
    //   <h2>The count from App: {window.localStorage.getItem("count")}</h2>
    //   <Counter />
    //   <Card></Card>
    //   <button
    //     onClick={handleToggleDarkMode}
    //     className="w-[40%] mt-4 h-[50px] bg-blue-600 hover:bg-blue-900 text-white rounded-lg"
    //   >
    //     Change dark mode
    //   </button>
    // </div>
  );
}

export default App;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { increment } from "./counterSlice";
import globalSlice from "./globalSlice";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
//my custom middleware to logger store state
// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log(action);
//   next(action)
// };
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});

// store.subscribe(() => {
//   console.log(`current state: ${store.getState().counter.count}`);
// });
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment()); 

// sagaMiddleware.run(rootSaga)
export default store;

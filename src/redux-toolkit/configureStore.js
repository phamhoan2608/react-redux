import {configureStore, combineReducers} from "@reduxjs/toolkit"
import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";
import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice
})

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware)
})

// sagaMiddleware.run(rootSaga)
export default store;
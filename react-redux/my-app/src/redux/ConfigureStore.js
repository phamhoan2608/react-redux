import {createStore, combineReducers} from "redux"
import counterReducer from "./counter"

//sau này sử dụng rất nhiều reducer
const reducer = combineReducers({
    counter: counterReducer,
})
const store = createStore(reducer);

export default store;
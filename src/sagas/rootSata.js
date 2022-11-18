import { all, fork } from "redux-saga/effects";
import hackerNewSaga from "./hackerNew/saga";
import newsSaga from "./news/saga";

export default function* rootSaga() {
   yield all([fork(newsSaga)])
  //  yield all([fork(hackerNewSaga)])

}
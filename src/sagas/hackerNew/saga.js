import { takeLatest } from "redux-saga/effects";
import { getHackerNew } from "./hackerNewSlice";
import handlerHackerNew from "./handlers";

export default function* hackerNewSaga() {
  yield takeLatest(getHackerNew.type, handlerHackerNew)
}

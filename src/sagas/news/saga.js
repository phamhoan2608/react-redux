import { takeLatest } from "redux-saga/effects";
import { handlerGetUser } from "./handlers";
import { getNews } from "./newSlice";

export default function* newsSaga() {
  yield takeLatest(getNews.type, handlerGetUser)
}
import { call, put } from "redux-saga/effects";
import { setLoading, setNews } from "./newSlice";
import  requestGetNews  from "./request";

export function* handlerGetUser({payload, type}) {
  console.log("payload", payload)
  try {
    const response = yield call(requestGetNews,payload);
    const { hits } = response.data;
    yield put(setNews(hits))
    yield put(setLoading(false))
  } catch (error) {
    console.log(error)
  }
}
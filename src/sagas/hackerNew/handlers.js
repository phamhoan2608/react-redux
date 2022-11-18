import { call, put } from "redux-saga/effects";
import { setErrorMessage, setHackerNew } from "./hackerNewSlice";
import getHackerNewRequest from "./request";

export default function* handlerHackerNew(action) {
  try {
    const response = yield call(getHackerNewRequest);
    console.log("response", response);
    const { hits } = response.data;
    yield put(setHackerNew(hits));
  } catch (error) {
    console.log(error);
  }
}

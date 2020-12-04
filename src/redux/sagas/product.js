import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../types/product";
import getProduct from "../actions/produstlist";

function* product(action) {
  try {
    const data = yield call(getProduct, action.Params);
    yield put({
      type: types.GET_PRODUCTS_SUCCEED,
      products: data,
    });
  } catch (ex) {
    yield put({
      type: types.GET_PRODUCTS_FAILURE,
    });
  }
}

export default function* productsSaga() {
  yield takeLatest(types.GET_PRODUCTS_REQUEST, product);
}

import { takeEvery } from "redux-saga/effects";
import Api from "./path/to/api";

function* watchFetchProducts() {
  yield takeEvery("PRODUCTS_REQUESTED", fetchProducts);
}

function* fetchProducts() {
  //bruce
  const products = yield Api.fetch("/products");
  console.log(products);
}
import { takeEvery } from "redux-saga/effects";
import Api from "./path/to/api";

function* watchFetchProducts() {
  yield takeEvery("PRODUCTS_REQUESTED", fetchProducts);
}

function* fetchProducts() {
  //bruce
  const products = yield Api.fetch("/products");
  console.log(products);
}
import { takeEvery } from "redux-saga/effects";
import Api from "./path/to/api";

function* watchFetchProducts() {
  yield takeEvery("PRODUCTS_REQUESTED", fetchProducts);
}

function* fetchProducts() {
  //bruce
  const products = yield Api.fetch("/products");
  console.log(products);
}

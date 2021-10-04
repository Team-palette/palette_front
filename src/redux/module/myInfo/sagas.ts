import { myInfoApi } from "../../../api/myInfoApi";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  loadHomeInfoReq,
  loadHomeInfoSuccess,
  loadHomeInfoFailure,
} from "./myInfo";

// Home 정보를 불러오는 worker 함수
function* loadMyHomeSaga({ payload }: PayloadAction<string>) {
  try {
    const { data } = yield call(myInfoApi.loadHomeInfo, payload);
    yield put(loadHomeInfoSuccess(data));
  } catch (error) {
    yield put(loadHomeInfoFailure(error));
  }
}

// myInfo Watcher
export function* myInfoWatcher() {
  yield takeLatest(loadHomeInfoReq.type, loadMyHomeSaga);
}

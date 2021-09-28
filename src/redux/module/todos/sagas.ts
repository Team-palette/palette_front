import { todoApi } from "./../../../api/todosApi";
import { call, put, takeLatest } from "@redux-saga/core/effects";

import {
  loadTodoFailure,
  loadTodosFailure,
  loadTodosReq,
  loadTodoReq,
  loadTodosSuccess,
  loadTodoSuccess,
} from "./todos";
/**
 * todos 에서 사용되는 saga 함수들을 선언합니다.
 */

/**
 * redux-saga의 worker 함수입니다. redux thunk의 thunk 함수라고 생각하시면 됩니다.
 * work함수에서는 API 요청을 하고 try.. catch 문을 통해 에러를 처리합니다.
 * 'put'은 redux-saga 의 기능인데, redux-thunk의 thunk함수에서의 dispatch 와 같다고 생각하시면 됩니다.
 */
function* loadTodosSaga() {
  try {
    const { data } = yield call(todoApi.loadTodos);
    yield put(loadTodosSuccess(data));
  } catch (error) {
    yield put(loadTodosFailure(error));
  }
}

function* loadTodoByIdSaga() {
  try {
    const { data } = yield call(todoApi.loadTodos);
    yield put(loadTodoSuccess({ data }));
  } catch (error) {
    yield put(loadTodoFailure(error));
  }
}

/**
 * Watch 함수에는 생성한 worker 함수들을 모아줍니다.
 * 이렇게 Watch 함수들은 type을 관찰(watch)하고 있다가, 그 타입이 dispatch 되면 두번째 파라미터의 함수를 실행합니다.
 */

export function* todosWatch() {
  yield takeLatest(loadTodosReq.type, loadTodosSaga); // takeLatest는 redux-saga의 기능인데, 서버로 api를 여러번 요청해도 마지막 요청에 대한 응답만 받아 올 수 있게 합니다.
  yield takeLatest(loadTodoReq.type, loadTodoByIdSaga);
}

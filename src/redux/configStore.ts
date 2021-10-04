import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { todosWatch } from "./module/todos/sagas";
import { myInfoWatcher } from "./module/myInfo/sagas";
import todoSlice from "./module/todos/todos";
import myInfoSlice from "./module/myInfo/myInfo";

const sagaMiddleWare = createSagaMiddleware(); // redux-saga 미들웨어 설정
function* rootSaga() {
  yield all([todosWatch(), myInfoWatcher()]); // rootSaga에서는 생성한 watch함수들을 모두 넣어줍니다.
}

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer, // reducer를 넣어줍니다. Slice.reducer를 통해 얻을 수 있습니다.
    myInfo: myInfoSlice.reducer,
  },
  middleware: [
    sagaMiddleWare, // redux-saga 설정 해주기 (immer, devTools 자체적으로 지원)
  ],
});

sagaMiddleWare.run(rootSaga); // redux-saga 실행 코드는 항상 store 선언 이후에

// store reducer의 타입이고, ReturnType 이라는 '유틸타입'을 이용해서 Store reducer의 타입을 얻습니다.
export type RootState = ReturnType<typeof store.getState>;
export default store;

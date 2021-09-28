import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTodosState } from "./type";
/**
 * redux-toolkit에서 제공하는 createSlice를 이용해서 action, actionCreator, reducer를 한번에 선언합니다.
 */

const initialState: TTodosState = {
  todos: {
    loading: false,
    error: null,
    data: [],
  },
  todo: {
    loading: false,
    error: null,
    data: {},
  },
};

/**
 * Typescript 에서 Slice를 선언할 때 name, initialState, reducers 는 필수 값입니다.
 * name 은 type 앞에 들어가는 value입니다. (ex: 'todos/loadTodoReq')
 * reducers 는 Switch문을 대체하고, 우리가 썼던 redux-actions와 비슷한 구조를 가졌습니다.
 *
 * Slice의 이름은 보통 '~Slice' 로 명명하는 것 같으니, 저희도 그렇게 하겠습니다!
 */
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodosReq: (state) => {
      state.todos.loading = true; // immmer 를 자체적으로 지원하기 때문에 이렇게 작성 가능합니다.
    },
    /**
     * 비구조화 문법을 이용해도 됩니다.
     * 저희는 비구조화 문법을 이용해서 payload를 바로 빼내어주겠습니다.
     */
    loadTodosSuccess: (state, { payload }) => {
      state.todos.loading = false;
      state.todos.data = payload;
      // state.todos.data = action.payload; 'X'
    },
    loadTodosFailure: (state, action) => {
      state.todos.loading = false;
      state.todos.data = action.payload;
    },
    /**
     * reducer의 두번째 파라미터에서는 action을 받아옵니다.
     * action의 타이핑은 toolkit에서 제공하는 PayloadAction이라는 '유틸타입' 을 이용해서 가능합니다.
     * PayloadAction< > 제너릭 자리에 Payload 의 타입을 넣어줍니다.
     */
    loadTodoReq: (state, { payload }: PayloadAction<number>) => {
      state.todo.loading = false;
      state.todo.data = payload;
    },
    loadTodoSuccess: (state, { payload }) => {
      state.todo.loading = false;
      state.todo.data = payload;
    },
    loadTodoFailure: (state, { payload }) => {
      state.todo.loading = false;
      state.todo.data = payload;
    },
  },
});

/**
 * Slice에서 aciotns를 꺼낼 수 있는데 이것은 actionCreator 입니다. --> {type: 'todos/...'} 를 return 하는 함수입니다.
 * actionCreator.type 과 같이 type을 꺼낼 수 있습니다. 스트링형태로 type을 return 합니다.
 */

// dispatch 할 actionCreator를 export 합니다.
export const {
  loadTodosReq,
  loadTodosSuccess,
  loadTodosFailure,
  loadTodoFailure,
  loadTodoReq,
  loadTodoSuccess,
} = todoSlice.actions;
export default todoSlice;

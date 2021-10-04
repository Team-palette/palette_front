import { TMyInfo } from "./module/myInfo/types";
import { TTodosState } from "./module/todos/type";

export type TState = {
  todos: TTodosState;
  myInfo: TMyInfo;
};

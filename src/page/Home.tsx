import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configStore";
import { loadTodosReq } from "../redux/module/todos/todos";

const Home = () => {
  const dispatch = useDispatch();
  /**
   * 생성했던 RootState 타입은 redux store state를 사용할 때 이렇게 타이핑 해주면 됩니다.
   */
  const { data, loading, error } = useSelector(
    (state: RootState) => state.todos.todos
  );

  useEffect(() => {
    dispatch(loadTodosReq());
  }, []);

  if (loading) return <div>로딩 중!</div>;
  if (error) return <div>에러 발생!</div>;

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default Home;

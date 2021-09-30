import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/configStore";
import { loadTodosReq } from "../redux/module/todos/todos";
import { flex, responsive, textStyle } from "../styles/utils";

// Test Page
const Tester = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosReq());
  }, []);

  const { data, error, loading } = useSelector(
    (state: RootState) => state.todos.todos
  );

  if (loading) return <div>로딩 중..!</div>;

  return (
    <Container>
      <div className="title">제목</div>
      <TodoList>
        {data && data.map((todo) => <div key={todo.id}>{todo.title}</div>)}
      </TodoList>
    </Container>
  );
};

const Container = styled.div`
  ${responsive.desktopOnly}
  width: 375px;
  border: 1px solid red;

  .title {
    ${flex("start")}
    ${textStyle.sub_1}
  }
`;

const TodoList = styled.main``;
export default Tester;

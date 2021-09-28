import instance from ".";

export const todoApi = {
  loadTodos: () => instance.get("/todos"),
  loadTodoById: (id: number) => instance.get(`/todos/${id}`),
};

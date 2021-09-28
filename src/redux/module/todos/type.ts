export type TTodo = {
  id?: number;
  title: string;
  body: string;
  userId: number;
};

export type TTodosState = {
  todos: {
    loading: boolean;
    error: any;
    data: TTodo[];
  };
  todo: {
    loading: boolean;
    error: any;
    data: TTodo | {};
  };
};

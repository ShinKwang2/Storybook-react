import { createContext, PropsWithChildren, useContext, useReducer } from 'react';

type TodoListContextProps = {
  readonly todoList: string[];
  readonly onAdd: (todo: string) => void;
  readonly onDelete: (todo: string) => void;
};

const TodoListContext = createContext<TodoListContextProps | null>(null);

type ReducerAction = { type: 'ADD'; data: string } | { type: 'DELETE'; data: string };

const reducer = (todoList: string[], action: ReducerAction) => {
  switch (action.type) {
    case 'ADD':
      return [...todoList, action.data];
    case 'DELETE':
      return todoList.filter((item) => item !== action.data);
    default:
      return todoList;
  }
};

export const TodoListContextProvider = ({ children }: PropsWithChildren) => {
  const [todoList, dispatch] = useReducer(reducer, ['리액트 공부하기', '운동하기', '책 읽기']);
  const onAdd = (todo: string) => {
    dispatch({
      type: 'ADD',
      data: todo,
    });
  };
  const onDelete = (todo: string) => {
    dispatch({
      type: 'DELETE',
      data: todo,
    });
  };

  console.log(todoList);

  return (
    <TodoListContext.Provider value={{ todoList, onAdd, onDelete }}>
      {children}
    </TodoListContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodoList = () => {
  const ctx = useContext(TodoListContext);
  if (!ctx) throw new Error('TodoListContext is null');
  return ctx;
};

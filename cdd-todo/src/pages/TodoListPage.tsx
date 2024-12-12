import TodoList from '@/components/templates/TodoList';

export default function TodoListPage() {
  const todoList = ['리액트 공부하기', 'CDD 공부하기', '할 일 목록앱 만들기'];

  return <TodoList todoList={todoList} />;
}

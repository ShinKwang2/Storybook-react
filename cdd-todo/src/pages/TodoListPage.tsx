import TodoList from '@/components/templates/TodoList';
import { useTodoList } from '@/contexts/TodoList-context';

export default function TodoListPage() {
  const { todoList, onDelete } = useTodoList();

  return <TodoList todoList={todoList} onDelete={onDelete} />;
}

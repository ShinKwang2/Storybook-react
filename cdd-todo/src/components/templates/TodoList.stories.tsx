import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TodoList from './TodoList.tsx';

const meta = {
  title: 'Templates/TodoList',
  component: TodoList,
  args: {
    onDelete: fn(),
  },
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todoList: [],
  },
};

export const WithTodoList: Story = {
  args: {
    todoList: ['리액트 공부하기', 'CDD 공부하기', '할 일 목록 앱 개밸하기'],
  },
};

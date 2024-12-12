import type { Meta, StoryObj } from '@storybook/react';
import TodoListPage from './TodoListPage';

const meta = {
  title: 'Pages/TodoListPage',
  component: TodoListPage,
} satisfies Meta<typeof TodoListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

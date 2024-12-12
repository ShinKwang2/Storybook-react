import type { Meta, StoryObj } from '@storybook/react';
import TodoInputPage from './TodoInputPage.tsx';

const meta = {
  title: 'Pages/TodoInputPage',
  component: TodoInputPage,
} satisfies Meta<typeof TodoInputPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

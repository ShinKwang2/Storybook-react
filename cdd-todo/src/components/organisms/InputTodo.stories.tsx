import type { Meta, StoryObj } from '@storybook/react';
import InputTodo from './InputTodo';

const meta = {
  title: 'Organisms/InputTodo',
  component: InputTodo,
} satisfies Meta<typeof InputTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InputText from './InputText';

const meta = {
  title: 'Atoms/InputText',
  component: InputText,
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '리액트란?',
  },
};

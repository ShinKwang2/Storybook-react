import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedButton: Story = {
  args: {
    label: '등록',
  },
};

export const BlueButton: Story = {
  args: {
    label: '닫기',
    color: '#304FFE',
  },
};

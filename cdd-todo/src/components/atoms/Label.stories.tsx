import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta = {
  title: 'Atoms/Label',
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '리액트 공부하기',
  },
};

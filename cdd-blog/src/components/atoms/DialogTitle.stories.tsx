import { Meta, StoryObj } from '@storybook/react';
import DialogTitle from './DialogTitle';

const meta = {
  title: 'Atoms/DialogTitle',
  component: DialogTitle,
} satisfies Meta<typeof DialogTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '블로그글등록',
  },
};

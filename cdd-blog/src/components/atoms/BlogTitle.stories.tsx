import { Meta, StoryObj } from '@storybook/react';
import BlogTitle from './BlogTitle';

const meta = {
  title: 'Atoms/BlogTitle',
  component: BlogTitle,
} satisfies Meta<typeof BlogTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '블로그 제목',
  },
};

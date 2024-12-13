import { Meta, StoryObj } from '@storybook/react';
import AppTitle from './AppTitle';

const meta = {
  title: 'Atoms/AppTitle',
  component: AppTitle,
} satisfies Meta<typeof AppTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

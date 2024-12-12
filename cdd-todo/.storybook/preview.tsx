import React from 'react';
import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { TodoListContextProvider } from '../src/contexts/TodoList-context';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <TodoListContextProvider>
          <Story />
        </TodoListContextProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;

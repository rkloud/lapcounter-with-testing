import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders add lap button', () => {
  const { getByText } = render(<App />);
  const addButton = getByText("Add Lap");
  expect(addButton).toBeInTheDocument();
});

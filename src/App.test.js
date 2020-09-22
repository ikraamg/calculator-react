import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('checks if test in App is being rendered', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/rendered/i);
  expect(textElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the application', () => {
  render(<App />);
  const headerElement = screen.getByText(/Howdy partner!/i);
  expect(headerElement).toBeInTheDocument();
});

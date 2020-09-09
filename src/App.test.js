import React from 'react';
import { render } from '@testing-library/react';
import Header from './components/header.component';

test('renders the app', () => {
  const { getByText } = render(<Header />);
  const text = getByText(/Interview Question Generator/i);
  expect(text).toBeInTheDocument();
});

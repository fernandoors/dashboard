import React from 'react';
import { render } from '@testing-library/react';
import Login from '../pages/Login/LoginPage';

test('renders learn react link', () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});

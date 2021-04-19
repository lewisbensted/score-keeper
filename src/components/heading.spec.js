import { render, screen } from '@testing-library/react';
import Heading from './heading';

test('renders learn react link', () => {
  render(<Heading />);
  const linkElement = screen.getByText(/Table Tennis Score Keeper/i);
  expect(linkElement).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react', () => {
  render(<App />);
  expect(linkElement).toBeInTheDocument();
});

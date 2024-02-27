// __tests__/Button.test.js
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './components/app/Button';

test('renders Button component with custom label', () => {
  render(<Button label="Custom Label" />);
});

test('renders Button component with left and right icons', () => {
  render(<Button leftIcon rightIcon />);
});
test('handles click event', () => {
  const mockOnClick = jest.fn();
  const { getByText } = render(<Button onClick={mockOnClick} />);
  fireEvent.click(getByText('Click me'));
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});



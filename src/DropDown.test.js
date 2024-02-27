// __tests__/DropDown.test.js
import React from 'react';
import { render } from '@testing-library/react';
import DropDown from './components/app/DropDown';

test('renders DropDown component with custom label', () => {
  render(<DropDown />);
});

// test('renders DropDown component with custom data', () => {
//   const customData = [{ option: 'Option 1' }, { option: 'Option 2' }];
//   render(<DropDown data={customData} />);
// });


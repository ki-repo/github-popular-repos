import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

test('should render successfully', () => {
  const app = shallow(
      <App />
  );
  expect(app).toBeTruthy();
});

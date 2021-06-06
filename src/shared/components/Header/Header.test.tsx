import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import { shallow } from 'enzyme';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch: () => ({ url: '/popular' }),
}));
test('should render successfully', () => {
  const header = shallow(
    <Router>
      <Header />
    </Router>
  );
  expect(header).toBeTruthy();
});

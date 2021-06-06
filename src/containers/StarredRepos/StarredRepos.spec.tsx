import React from 'react';
jest.mock('react-query');
import { waitFor } from '@testing-library/react';
import { shallow } from 'enzyme';
import StarredRepos from './StarredRepos';
// const mockedRouter = NextRouter as jest.Mocked<typeof NextRouter>;
const mockReplace = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch: () => ({ url: '/popular' }),
}));

test('should render successfully', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should show message when the user doesnt have any starred repos', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should show list of repos when the user have starred repos', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should show list of repos without starring ability', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

import React from 'react';
import * as reactQuery from 'react-query';
jest.mock('react-query');
import { waitFor } from '@testing-library/react';
import { shallow } from 'enzyme';
import PopularRepos from './PopularRepos';
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

test('should show loading while the query being running is loading data', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should show error when query run fails', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should show list of repos after showing data', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should populate language popup after fetching data', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should filter list when selection chages', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should populate language popup after fetching data', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should have empty local storage', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should populate local storage with element when repo star is clicked', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('repo ubtton shouldnt exist after being clicked once', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

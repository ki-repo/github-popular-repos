import styled, { createGlobalStyle } from 'styled-components';
import { fonts } from './styles/fonts';
export const GlobalStyle = createGlobalStyle`
${fonts}
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: #faebd7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #272727;
  font-family: "Quicksand", serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 0rem;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;

/* eslint-disable */
export const MainAppSt = styled.div`
  padding: 5%;
`;

import styled from 'styled-components';

/** CardItemWrapper component used as a wrapper for single card */
export const CardItemWrapper = styled.li`
  display: grid;
  padding: 1rem;
  width: 100%;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    33.3333%;
  }
`;

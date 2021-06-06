import styled from 'styled-components';

/** CardSubtitle component used as a wrapper for Card Subtitle */

interface CardBodyTextProps {
  inputColor?: string;
}
export const CardSubTitle = styled.a<CardBodyTextProps>`
  color: ${({ inputColor }) => inputColor || '#dadada'};
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
`;

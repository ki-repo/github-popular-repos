import styled from 'styled-components';

/** CardBodyText component used as a wrapper for Card body Text */

interface CardBodyTextProps {
  inputColor?: string;
}
export const CardBodyText = styled.h2<CardBodyTextProps>`
  color: ${({ inputColor }) => inputColor || '#dadada'};
  font-size: 1.1rem;
`;

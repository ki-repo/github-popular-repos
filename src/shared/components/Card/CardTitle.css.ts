import styled from "styled-components";

/** CardTitle component used as a wrapper for Card Title */

interface CardBodyTextProps {
    inputColor?: string;
  }

export const CardTitle = styled.h2<CardBodyTextProps>`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
  color: ${({ inputColor }) => inputColor || '#dadada'};
`;

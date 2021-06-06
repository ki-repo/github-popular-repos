import styled from "styled-components";

/** CardItem component used as a wrapper for single card */
export const CardItem = styled.div`
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px #1e1e1e;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #c53e55;
  &:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

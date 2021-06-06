import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageHeader = styled.div`
  overflow: hidden;
  background-color: rgb(197, 62, 85);
  padding: 0.2rem 0.25rem;
`;

export const HeaderLink = styled(Link)`
  float: left;
  color: rgb(218, 218, 218);
  text-align: center;
  padding: 0.75rem;
  text-decoration: none;
  font-size: 18px;
  line-height: 1.5rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: #ddd;
    color: black;
  }
  margin-right: 1rem;
  @media screen and (max-width: 500px) {
    float: none;
    display: block;
    text-align: left;
  }
`;

export const HeaderTitleLink = styled(HeaderLink)`
  font-size: 25px;
  font-weight: bold;
`;

export const HeaderLinks = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 500px) {
    float: none;
    flex-direction: column;
  }
`;

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Card from '@mui/material/Card';

export const StoreCard = styled(Card)`
  && {
    margin: 0.5rem;
    padding: 1rem;
    min-width: 200px;
    min-height: 70px;
    border-radius: 20px;
    cursor: pointer;
    ${({ active }) => {
      return active ? `background-color: #0de073` : `background-color: white`;
    }};
  }
`;

export const StoreName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #0de073;
  ${({ active }) => {
    return active ? `color: white` : ``;
  }}
`;

export const StoreDescription = styled.div`
  font-size: 0.8rem;
  margin: 5px 0 0 0;
  ${({ active }) => {
    return active ? `color: white` : ``;
  }}
`;

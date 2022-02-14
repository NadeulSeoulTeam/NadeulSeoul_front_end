/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Card from '@mui/material/Card';

export const StoreCard = styled(Card)`
  margin: 10px;
`;

export const Store = styled.div`
  display: grid;
  grid-template-areas:
    ' storeName storeName storeName storeName'
    ' storeDescription storeDescription storeDescription storeDescription';
  margin: 20px;
`;

export const StoreName = styled.div`
  grid-area: storeName;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
  text-align: start;
  padding-bottom: 20px;
  color: #0de073;
  ${({ active }) => {
    return active ? `color: white` : ``;
  }}
`;

export const StoreDescription = styled.div`
  grid-area: storeDescription;
  font-family: Roboto;
  font-size: 15px;
  padding-left: 10px;
  text-align: start;
  ${({ active }) => {
    return active ? `color: white` : ``;
  }}
`;

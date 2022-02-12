/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Card from '@mui/material/Card';
import ClearIcon from '@mui/icons-material/Clear';

export const StoreCard = styled(Card)`
  position: relative;
  width: 100px;
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
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
  text-align: start;
  padding-bottom: 20px;
  color: #68c78e;
`;

export const StoreDescription = styled.div`
  grid-area: storeDescription;
  font-family: Roboto;
  font-size: 12px;
  padding-left: 10px;
  text-align: start;
`;

export const DeleteButton = styled(ClearIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

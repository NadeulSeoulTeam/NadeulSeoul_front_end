/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Store = styled.div`
  display: grid;
  grid-template-areas:
    ' storeOrder storeName storeName button'
    ' storeOrder storeDescription storeDescription storeDescription';
  margin: 20px;
`;

export const StoreName = styled.span`
  grid-area: storeName;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  padding-left: 10px;
  text-align: start;
`;

export const StoreDescription = styled.span`
  grid-area: storeDescription;
  font-family: Roboto;
  font-size: 15px;
  padding-left: 10px;
  text-align: start;
`;

export const StoreOrder = styled.div`
  grid-area: storeOrder;
  border: 3px solid #68c78e;
  border-radius: 50%;
  box-sizing: border-box;
  height: 60px;
  width: 60px;
  margin-left: 20px;
  text-align: center;
  line-height: 50px;
`;

export const DeleteButton = styled(Button)`
  display: button;
`;

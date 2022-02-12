/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Store = styled.div`
  display: grid;
  grid-template-areas:
    ' storeOrder storeName storeName button'
    ' storeOrder storeDescription storeDescription button';
  margin: 5px;
  grid-template-rows: 30px 30px;
`;

export const StoreName = styled.span`
  grid-area: storeName;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 0px;
  padding-left: 10px;
  text-align: start;
  height: 30px;
`;

export const StoreDescription = styled.span`
  grid-area: storeDescription;
  font-family: Roboto;
  font-size: 12px;
  padding-left: 10px;
  text-align: start;
`;

export const StoreOrder = styled.div`
  grid-area: storeOrder;
  border: 3px solid #68c78e;
  border-radius: 50%;
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  margin-left: 20px;
  text-align: center;
  line-height: 30px;
`;

export const DeleteButton = styled(Button)`
  display: button;
`;

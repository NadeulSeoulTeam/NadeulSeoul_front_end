/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Card from '@mui/material/Card';
import ClearIcon from '@mui/icons-material/Clear';

export const StoreCard = styled(Card)`
  && {
    margin: 0 0 1.5rem 0;
    padding: 1rem;
    min-width: 200px;
    min-height: 70px;
    border-radius: 20px;
    position: relative;
  }
`;

export const StoreName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #0de073;
`;

export const StoreDescription = styled.div`
  font-size: 0.8rem;
  margin: 5px 0 0 0;
`;

export const DeleteButton = styled(ClearIcon)`
  && {
    position: absolute;
    margin: 5px;
    top: 0.5rem;
    right: 0.5rem;
    color: #c4c4c4;
    cursor: pointer;
    font-size: 1rem;
  }
`;

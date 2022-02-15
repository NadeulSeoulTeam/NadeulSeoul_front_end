/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const Store = styled.div`
  margin: 1.2rem 0;
  display: flex;
  align-items: center;
  position: relative;
`;

export const StoreDiv = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

export const StoreName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  text-align: start;
  margin: 0;
`;

export const StoreDescription = styled.p`
  font-size: 0.8rem;
  text-align: start;
  margin: 5px 0 0 0;
`;

export const StoreOrder = styled.div`
  border: 2px solid #0de073;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoreOrderNum = styled.p`
  font-size: 0.8rem;
`;

export const DeleteButton = styled(CloseIcon)`
  && {
    position: absolute;
    right: 0;
    color: #c4c4c4;
    font-size: 1rem;
    padding: 3px;
    cursor: pointer;
  }
`;

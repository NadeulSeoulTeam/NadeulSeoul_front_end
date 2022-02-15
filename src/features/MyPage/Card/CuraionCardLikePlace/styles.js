import styled from 'styled-components';
import Card from '@mui/material/Card';

export const Wrapper = styled(Card)`
  && {
    background-color: white;
    border-radius: 15px;
    margin: 0 1.3rem 2rem 0;
    padding: 1.5rem 1.5rem 2rem 1.5rem;
    cursor: pointer;
    flex-shrink: 0;
    width: 190px;
    position: relative;
  }
`;

export const StoreName = styled.p`
  color: #0de073;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

export const Address = styled.p`
  font-size: 0.8rem;
  margin: 0 0 0.3rem 0;
`;

export const StoreInfo = styled.p`
  font-size: 0.8rem;
  margin: 0 0 1rem 0;
`;

export const BtnExplain = styled.span`
  position: absolute;
  right: 3rem;
  bottom: 1rem;
  font-size: 0.7rem;
  color: #c4c4c4;
`;

export const CartBtn = styled.button`
  position: absolute;
  right: 0.5rem;
  bottom: 1rem;
  font-size: 1.3rem;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  ${({ active }) => {
    return active ? `opacity: 1` : `opacity: 0.2`;
  }}
`;

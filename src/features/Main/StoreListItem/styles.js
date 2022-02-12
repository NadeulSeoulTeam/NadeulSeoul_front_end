import styled from 'styled-components';
import Card from '@mui/material/Card';

export const Wrapper = styled(Card)`
  && {
    background-color: white;
    border-radius: 15px;
    margin: 0 20px 0 0;
    cursor: pointer;
    flex-shrink: 0;
    width: 20vw;
  }
`;

export const StoreName = styled.p`
  color: #0de073;
  font-weight: bold;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
`;

export const Address = styled.p`
  font-size: 0.8rem;
  padding: 0 1rem;
  margin: 0 0 0.3rem 0;
`;

export const StoreInfo = styled.p`
  font-size: 0.8rem;
  padding: 0 1rem;
  margin: 0 0 1rem 0;
`;

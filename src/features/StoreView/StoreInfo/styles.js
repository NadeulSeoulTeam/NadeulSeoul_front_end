import styled from 'styled-components';
import Card from '@mui/material/Card';

export const StoreCard = styled(Card)`
  position: absolute;

  justify-content: center;
  z-index: 2;
  top: 80px;
  right: 0.5%;
  width: 200px;
  height: 450px;
`;
export const CardHeader = styled.div`
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  padding: 20px;
  padding-left: 60px;
  color: #68c78e;
`;
export const CardScript = styled.div`
  position: relative;
  padding-left: 60px;
  padding-bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`;

export const LikeButton = styled.button`
  position: relative;
  width: 70px;
  padding: 10px;
  margin: 10px;
  left: 310px;
  bottom: 50px;
  ${({ active }) => {
    return active ? `opacity: 1` : `opacity: 0.2`;
  }}
`;

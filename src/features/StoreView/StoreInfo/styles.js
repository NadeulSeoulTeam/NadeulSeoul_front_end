import styled from 'styled-components';
import Card from '@mui/material/Card';
import CloseIcon from '@mui/icons-material/Close';

export const StoreCard = styled(Card)`
  && {
    position: absolute;
    min-width: 275px;
    border-radius: 20px 0 0 20px;
    padding: 0 0 3rem 0;
    z-index: 2;
    top: 80px;
    right: 0;
  }
`;

export const CloseBtn = styled(CloseIcon)`
  position: absolute;
  margin: 5px;
  top: 0.5rem;
  right: 0.5rem;
  color: #c4c4c4;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  color: #0de073;
`;

export const CardScript = styled.div`
  padding: 5px 1.5rem 0 1.5rem;
  font-size: 14px;
`;

export const BtnExplain = styled.span`
  position: absolute;
  right: 3rem;
  bottom: 1rem;
  font-size: 0.7rem;
  color: #c4c4c4;
`;

export const LikeButtonStyle = styled.button`
  position: absolute;
  right: 0.5rem;
  bottom: 1rem;
  font-size: 1.3rem;
  background-color: transparent;
  border: transparent;
  ${({ active }) => {
    return active ? `opacity: 1` : `opacity: 0.2`;
  }}
`;

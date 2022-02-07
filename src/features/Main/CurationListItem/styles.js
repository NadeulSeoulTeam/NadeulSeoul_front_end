import styled from 'styled-components';
import Card from '@mui/material/Card';

export const Wrapper = styled(Card)`
  && {
    background-color: transparent;
    margin: 0 20px 0 0;
    cursor: pointer;
    flex-shrink: 0;
  }
`;

export const CurationImage = styled.div`
  width: 12vw;
  height: 12vw;
  background-color: #c4c4c4;
  position: relative;
`;

export const LikeChip = styled.div`
  font-size: 0.7rem;
  color: white;
  background-color: #0de073;
  border-radius: 20px;
  display: block;
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 3px 8px 5px 8px;
`;

export const CurationTitle = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

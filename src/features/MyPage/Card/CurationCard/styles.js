import styled from 'styled-components';
import Card from '@mui/material/Card';

export const Wrapper = styled(Card)`
  && {
    background-color: transparent;
    margin: 0 1.2rem 2rem 0;
    cursor: pointer;
    flex-shrink: 0;
    width: 160px;
  }
`;

export const ImageDiv = styled.div`
  width: 160px;
  height: 160px;
  background-color: transparent;
  position: relative;
`;

export const CurationImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
`;

export const LikeChip = styled.div`
  font-size: 0.8rem;
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
  margin: 10px 0;
`;

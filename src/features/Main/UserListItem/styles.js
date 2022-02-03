import styled from 'styled-components';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';

export const Wrapper = styled(Card)`
  && {
    background-color: transparent;
    margin: 0 20px 0 0;
    text-align: center;
    cursor: pointer;
  }
`;

export const UserEmoji = styled(Avatar)`
  && {
    width: 10vw;
    height: 10vw;
    font-size: 4vw;
  }
`;

export const UserName = styled.p`
  color: #68c78e;
  font-size: 1rem;
  margin: 10px 0;
`;

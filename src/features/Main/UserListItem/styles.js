import styled from 'styled-components';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';

export const Wrapper = styled(Card)`
  && {
    background-color: transparent;
    margin: 0 20px 0 0;
    text-align: center;
    cursor: pointer;
    width: 10vw;
  }
`;

export const UserEmoji = styled(Avatar)`
  && {
    width: 10vw;
    height: 10vw;
    font-size: 4vw;
    background-color: #d1f0df;
  }
`;

export const UserName = styled.p`
  color: #0de073;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 10px 0;
`;

import styled from 'styled-components';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';

export const Wrapper = styled(Card)`
  && {
    background-color: transparent;
    margin: 1%;
    text-align: center;
    cursor: pointer;
    width: 10vw;
    flex-shrink: 0;
  }
`;

export const UserEmoji = styled(Avatar)`
  && {
    width: 10vw;
    height: 10vw;
    font-size: 5vw;
    background-color: #d1f0df;
  }
`;

export const UserName = styled.p`
  color: #0de073;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 10px 0;
`;

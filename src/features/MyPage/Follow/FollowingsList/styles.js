import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';

export const Container = styled.div`
  padding: 3rem 30vw 0 30vw;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
  margin: 10px;
`;

export const ProfileEmoji = styled(Avatar)`
  && {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    background-color: #d1f0df;
  }
`;

export const Nickname = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    color: #0de073;
  }
`;

export const CustomListItem = styled(ListItem)`
  && {
    padding: 5px 0;
  }
`;

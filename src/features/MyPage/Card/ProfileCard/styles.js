import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const Container = styled.div`
  padding: 3rem 5rem;
`;

export const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const TextDiv = styled.div`
  margin-left: 1rem;
  display: inline;
`;

export const Nickname = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

export const ProfileEmoji = styled(Avatar)`
  && {
    width: 90px;
    height: 90px;
    font-size: 2.5rem;
    background-color: #d1f0df;
  }
`;

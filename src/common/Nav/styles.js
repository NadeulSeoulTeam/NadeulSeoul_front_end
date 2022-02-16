import styled from 'styled-components';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

export const Container = styled.div`
  width: 280px;
  height: 260px;
  background-color: white;
  border-radius: 0 20px 20px 0;
  padding: 0;
  position: fixed;
  top: 50px;
  text-align: center;
  z-index: 2;
`;

export const WhiteHolder = styled.div`
  width: 45px;
  height: 50px;
  background-color: white;
  border-radius: 0 35px 35px 0;
  position: fixed;
  top: 80px;
  left: 280px;
  cursor: pointer;
  z-index: 2;
`;

export const GreenHolder = styled.div`
  width: 45px;
  height: 50px;
  background-color: #0de073;
  border-radius: 0 35px 35px 0;
  position: fixed;
  top: 80px;
  cursor: pointer;
  z-index: 2;
`;

export const Icon = styled(MenuIcon)`
  && {
    font-size: 1.8rem;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-60%, -45%);
  }
`;

export const Nickname = styled.p`
  font-family: 'Hahmlet';
  font-weight: bold;
  font-size: 1.5rem;
  color: #0de073;
  position: absolute;
  width: 160px;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, 0%);
  cursor: pointer;
`;

export const CenterDiv = styled.div`
  position: absolute;
  width: 160px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const Text = styled.p`
  display: inline;
  margin: 3px;
`;

export const GreenText = styled.p`
  font-size: 0.9rem;
  color: #0de073;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  cursor: pointer;
  text-decoration: underline;
`;

export const GreenBtn = styled(Button)`
  && {
    font-family: 'Suit';
    font-weight: bold;
    background-color: #0de073;
    padding: 8px 20px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    border: none;
    position: absolute;
    width: 160px;
    left: 50%;
    bottom: 1.5rem;
    transform: translate(-50%, 0%);
    &.Mui-disabled {
      background-color: #fafafa;
    }
  }
`;

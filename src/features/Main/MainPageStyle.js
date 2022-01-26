import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const TopWrapper = styled.div`
  margin: 0 50px;
  background-color: #e5e5e5;
  text-align: center;
`;

export const BottomWrapper = styled.div`
  margin: 50px;
  background-color: #e5e5e5;
  text-align: start;
`;

export const MainTitle = styled.h1`
  font-family: 'Hahmlet';
  font-size: 48px;
  color: #68c78e;
  margin: 0;
`;

export const GreenBtn = styled(Button)`
  font-family: 'Suit';
  font-weight: bold;
  background-color: #68c78e;
  margin: 20px;
  padding: 12px 20px;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  border: none;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #222222;
  margin: 0;
`;

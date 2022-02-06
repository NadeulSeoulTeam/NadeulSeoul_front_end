import styled from 'styled-components';

// mui
import Button from '@mui/material/Button';

export const TopWrapper = styled.div`
  padding: 100px 50px 0 50px;
  text-align: center;
`;

export const MidWrapper = styled.div`
  display: flex block;
  margin: 20px 0;
`;

export const BottomWrapper = styled.div`
  padding: 10px 50px 50px 50px;
  text-align: start;
`;

export const MainTitle = styled.h1`
  font-family: 'Hahmlet';
  font-size: 48px;
  color: #0de073;
  margin: 0;
`;

export const GreenBtn = styled(Button)`
  && {
    font-family: 'Suit';
    font-weight: bold;
    background-color: #0de073;
    margin: 20px;
    padding: 8px 20px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    border: none;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #222222;
  margin: 40px 0 10px 0;
`;

export const SampleTags = styled(Button)`
  && {
    font-family: 'Suit';
    font-weight: bold;
    background-color: transparent;
    color: #0de073;
    border: solid 2px;
    border-radius: 50px;
    border-color: #0de073;
    padding: 2px 8px;
    margin: 0 2px;
  }
`;

export const TagOpener = styled.p`
  display: inline;
  color: #c4c4c4;
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
  margin: 0 2px;
`;

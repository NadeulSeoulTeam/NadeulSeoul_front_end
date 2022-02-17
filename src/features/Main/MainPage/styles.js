import styled from 'styled-components';

// mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import Grid from '@mui/material/Grid';

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
  margin-bottom: 2rem;
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
    &:hover {
      background-color: #06d469;
    }
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
  color: #0de073;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  margin: 20px;
`;

export const Wrapper = styled(Card)`
  && {
    display: inline-block;
    background-color: transparent;
    margin: 0 20px 0 0;
    cursor: pointer;
    flex-shrink: 0;
    width: 12vw;
  }
`;

export const ImageDiv = styled.div`
  width: 12vw;
  height: 12vw;
  background-color: transparent;
  position: relative;
`;

export const CurationImage = styled.img`
  width: 12vw;
  height: 12vw;
  object-fit: cover;
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
  font-size: 0.9rem;
  margin: 10px 0;
  height: 1rem;
  overflow: hidden;
`;

export const CurationGrid = styled(Grid)`
  && {
    text-align: center;
    margin: 3rem 3rem 0 3rem;
    padding-bottom: 3rem;
    width: 90vw;
    height: 200px;
    overflow-x: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const NoResult = styled.p`
  margin: auto;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const SeparatorBtn = styled.button`
  font-family: 'Suit';
  font-size: 0.8rem;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  padding: 1px 4px;
  cursor: pointer;
  ${({ active }) => {
    return active
      ? `{color: #0de073; font-weight: bold; }`
      : `{color: #c4c4c4;}`;
  }}
`;

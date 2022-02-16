import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const Underline = styled.hr`
  border-top: 2px solid #0de073;
  border-bottom: none;
  border-left: none;
  border-right: none;
  margin: 0;
`;

export const GreyBox = styled.div`
  position: absolute;
  background-color: #fafafa;
  // background-color: black;
  height: 5px;
  ${({ value }) => value === 0 && `width: 99.5px; left: 49.8px; top: 45px;`}
  ${({ value }) => value === 1 && `width: 112.5px; left: 148.6px; top: 45px;`}
  ${({ value }) => value === 2 && `width: 86.9px; left: 259.8px; top: 45px;`}
`;

export const CustomTabs = styled(Tabs)`
  && {
    margin: 0 3rem;
  }
  .MuiTabs-indicator {
    // position: absolute;
    // bottom: -3px;
    // height: 5px;
    background-color: transparent;
  }
`;

export const CustomTab = styled(Tab)`
  && {
    position: relative;
    font-family: 'Suit';
    font-weight: bold;
    color: #c4c4c4;
    &.Mui-selected {
      color: #0de073;
      font-weight: bold;
      background-color: #fafafa;
      border: 2px solid;
      border-bottom-style: none;
    }
    &.MuiTouchRipple-root {
      background-color: #fafafa;
      height: 100px;
    }
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

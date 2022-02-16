import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Container = styled.div`
  padding: 3rem 5rem;
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  color: #0de073;
  margin: 1rem 0;
`;

export const RowDiv = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
`;

export const SubTitle = styled.div`
  font-weight: bold;
  margin: 0 1rem 0 0;
`;

export const Content = styled(TextField)`
  .MuiOutlinedInput-root {
    color: #222222;
    font-family: 'Suit';
    background-color: white;
    border-radius: 15px;
    & fieldset {
      border-color: #0de073;
    }
    &:hover > fieldset {
      border-color: #0de073;
    }
    &.Mui-focused > fieldset {
      border-color: #0de073;
    }
    &.Mui-error > fieldset {
      border-color: #0de073;
    }
    input::placeholder {
      font-size: 0.9rem;
    }
  }
  .MuiInputBase-inputMultiline {
    ::placeholder {
      font-size: 0.9rem;
    }
  }
`;

export const GreenBtn = styled(Button)`
  && {
    font-family: 'Suit';
    font-weight: bold;
    background-color: #0de073;
    padding: 8px 20px;
    margin: 0 5px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: #06d469;
    }
  }
`;

export const GreyBtn = styled(Button)`
  && {
    font-family: 'Suit';
    font-weight: bold;
    color: white;
    background-color: #c4c4c4;
    padding: 8px 20px;
    margin: 0 5px;
    border-radius: 50px;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: #e6e6e6;
    }
  }
`;

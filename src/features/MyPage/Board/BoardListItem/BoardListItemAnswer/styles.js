import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const AnswerTitle = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
  padding: 1rem;
`;

export const Underline = styled.hr`
  border: none;
  border-top: 1px solid #d9d9d9;
`;

export const AnswerContent = styled.p`
  padding: 1rem;
  font-size: 0.875rem;
  word-wrap: break-word;
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

export const TextInput = styled(TextField)`
  .MuiOutlinedInput-root {
    color: #222222;
    font-family: 'Suit';
    background-color: white;
    border-radius: 15px;
    font-size: 0.825rem;
    min-width: 50vw;
    margin: 0 10px;
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
      font-size: 0.825rem;
    }
  }
  .MuiInputBase-inputMultiline {
    ::placeholder {
      font-size: 0.825rem;
    }
  }
`;

import styled from 'styled-components';
import TextField from '@mui/material/TextField';
// import InputBase from '@mui/material/InputBase';

export const Container = styled.div`
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-family: 'Hahmlet';
  font-size: 48px;
  color: #68c78e;
  padding: 25vh 0 0 0;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const InputLabel = styled.p`
  font-weight: bold;
  display: inline-block;
`;

export const InputLabelGreen = styled.p`
  font-weight: bold;
  display: inline-block;
  color: #68c78e;
  margin: 0 3px;
`;

export const TextInput = styled(TextField)`
  .MuiOutlinedInput-root {
    display: inline-block;
    color: #222222;
    font-family: 'Suit';
    background-color: white;
    border-radius: 15px;
    margin: 0 20px;
    & fieldset {
      border-color: #68c78e;
    }
    &:hover > fieldset {
      border-color: #68c78e;
    }
    &.Mui-focused > fieldset {
      border-color: #68c78e;
    }
`;

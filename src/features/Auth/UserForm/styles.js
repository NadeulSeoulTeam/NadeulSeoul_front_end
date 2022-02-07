import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export const Container = styled.div`
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-family: 'Hahmlet';
  font-size: 48px;
  color: #0de073;
  padding: 25vh 0 0 0;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 10vh 0;
`;

export const InputLabel = styled.p`
  font-weight: bold;
  display: inline-block;
`;

export const InputLabelGreen = styled.p`
  font-weight: bold;
  display: inline-block;
  color: #0de073;
  margin: 0 3px;
`;

export const TextInput = styled(TextField)`
  .MuiOutlinedInput-root {
    color: #222222;
    width: 35vw;
    font-family: 'Suit';
    background-color: white;
    border-radius: 15px;
    margin: 10px 20px;
    & fieldset {
      border-color: #0de073;
    }
    &:hover > fieldset {
      border-color: #0de073;
    }
    &.Mui-focused > fieldset {
      border-color: #0de073;
    }
    &.Mui-disabled > fieldset {
      border-color: #0de073;
    }
`;

// export const EmojiInput = styled(InputEmoji)`
//   .react-input-emoji--input {
//     margin: 20px;
//   }
// `;

export const GreenBtn = styled(Button)`
  && {
    display: block;
    font-family: 'Suit';
    font-weight: bold;
    background-color: #0de073;
    margin: 20px auto 20px auto;
    padding: 8px 20px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    border: none;
  }
`;

export const VerticalDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

// export const TextBoxDiv = styled.div`
//   display: inline-flex;
//   flex-direction: column;
// `;

// 왜인지 적용 안 되고 있음...
export const EmojiPicker = styled(Picker)`
  .emoji-mart-search input {
    font-family: 'Suit';
  }
`;

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

export const CourseForm = styled.div`
  padding: 5rem;
`;

export const ArticleDiv = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
`;

export const CourseHeader = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  color: #0de073;
  margin: 1rem 0;
`;

export const ArticleName = styled.div`
  font-weight: bold;
  width: 90px;
  left: 0;
  text-align: end;
  padding: 0;
  margin: 0 1rem 0 0;
`;

export const ArticleContent = styled(TextField)`
  .MuiOutlinedInput-root {
    color: #222222;
    font-family: 'Suit';
    font-size: 0.9rem;
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

export const RouteList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ButtonToggle = styled.button`
  background: #ffffff;
  color: #0de073;
  font-family: 'Suit';
  font-weight: bold;
  padding: 4px 15px;
  margin: 0 5px 0 0;
  border: 2px solid #0de073;
  box-sizing: border-box;
  border-radius: 20px;
  ${({ active }) => {
    return active
      ? `{background: #0de073; color: white; }`
      : `{background: white; color: #0de073;}`;
  }}
`;

export const Local = styled.div`
  grid-area: local;
  margin: 30px;
  margin-bottom: 0px;
  width: 300px;
  text-align: right;
  font-weight: bold;
`;

export const TagDesc = styled.div`
  color: #c4c4c4;
  font-size: 0.7rem;
  margin: 0 0 5px 0;
`;

export const TextToggleBtn = styled.button`
  display: inline;
  font-family: 'Suit';
  font-size: 0.9rem;
  padding: 2px 4px 2px 0;
  margin: 0 10px 0 0;
  border: none;
  background: transparent;
  ${({ active }) => {
    return active ? `{color: #0de073; font-weight: bold;}` : `color: #c4c4c4`;
  }}
`;

export const ImageUploadPictureDiv = styled.div`
  width: 260px;
  height: 195px;
  background: #ffffff;
  border: 2px solid #0de073;
  border-radius: 20px;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 260px;
  height: 195px;
  border-radius: 20px;
  border: none;
  overflow: hidden;
  position: relative;
  img {
    max-width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ImageAddButton = styled(AddPhotoAlternateOutlinedIcon)`
  position: absolute;
  bottom: -1.95rem;
  right: 0;
  color: #0de073;
`;

export const ImageAllDeleteButton = styled(DeleteOutlinedIcon)`
  position: absolute;
  bottom: -2rem;
  right: 1.7rem;
  color: #0de073;
  font-size: 24px;
`;

export const PictureNumbering = styled.div`
  position: absolute;
  left: 2rem;
  bottom: -1.8rem;
  font-weight: bold;
  font-size: 0.9rem;
  color: #0de073;
`;

export const PictureLeftButton = styled(ArrowLeftIcon)`
  position: absolute;
  bottom: -2rem;
  left: 0;
  color: #0de073;
`;

export const PictureRightButton = styled(ArrowRightIcon)`
  position: absolute;
  bottom: -2rem;
  left: 3.75rem;
  color: #0de073;
`;

export const ClearPicture = styled(BackspaceOutlinedIcon)`
  position: absolute;
  bottom: -2rem;
  right: 3.6rem;
  color: #0de073;
`;

export const CorrectPicture = styled(EditOutlinedIcon)`
  position: absolute;
  bottom: -2rem;
  right: 5.3rem;
  color: #0de073;
`;

export const GreenBtn = styled(Button)`
  && {
    font-family: 'Suit';
    font-weight: bold;
    background-color: #0de073;
    margin-top: 3rem;
    padding: 8px 20px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    border: none;
    left: 50%;
    transform: translate(-50%, 0%);
    &.Mui-disabled {
      background-color: #fafafa;
    }
    &:hover {
      background-color: #06d469;
    }
  }
`;

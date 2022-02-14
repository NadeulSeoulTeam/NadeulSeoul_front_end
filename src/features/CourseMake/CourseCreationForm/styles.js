/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ClearIcon from '@mui/icons-material/Clear';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddBoxIcon from '@mui/icons-material/AddBox';

export const CourseForm = styled.div`
  padding: 5rem;
`;

export const ArticleDiv = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

export const CourseHeader = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  color: #0de073;
`;

export const ArticleName = styled.div`
  font-weight: bold;
  width: 120px;
  text-align: end;
  padding: 0;
  margin: 0 1rem 0 0;
`;

export const ArticleContent = styled(TextField)`
  .MuiOutlinedInput-root {
    color: #222222;
    // width: 35vw;
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
  }
`;

export const RouteEdit = styled.div`
  grid-area: routeEdit;
  margin: 30px;
  margin-bottom: 0px;
  width: 300px;
  text-align: right;
  font-weight: bold;
`;

export const RouteList = styled.ul`
  grid-area: routeList;
  list-style: none;
  margin: 30px;
  margin-bottom: 0px;
`;

export const CourseDes = styled.div`
  grid-area: courseDes;
  margin: 30px;
  margin-bottom: 0px;
  width: 300px;
  text-align: right;
  font-weight: bold;
`;

export const CourseDesContent = styled(TextField)`
  .MuiOutlinedInput-root {
    color: #222222;
    width: 70vw;
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
  }
`;

export const FixdedMember = styled.div`
  grid-area: fixdedMember;
  margin: 30px;
  margin-bottom: 0px;
  width: 300px;
  text-align: right;
  font-weight: bold;
`;
export const FixedMemberContent = styled.input`
  grid-area: fixedMemberContent;
  margin: 30px;
  margin-bottom: 0px;

  width: 170px;
  height: 50px;
  background: #ffffff;
  border: 3px solid #68c78e;
  box-sizing: border-box;
  border-radius: 20px;

  ::placeholder {
    color: C4C4C4;
    padding: 20px;
  }
`;
export const Budget = styled.div`
  grid-area: budget;
  margin: 30px;
  margin-bottom: 0px;
  width: 300px;
  text-align: right;
  font-weight: bold;
`;
export const BudgetInput = styled.input`
  grid-area: budgetInput;
  margin: 30px;
  margin-bottom: 0px;

  width: 400px;
  height: 50px;
  background: #ffffff;
  border: 3px solid #68c78e;
  box-sizing: border-box;
  border-radius: 20px;

  ::placeholder {
    color: C4C4C4;
    padding: 20px;
  }
`;
export const Transportation = styled.div`
  grid-area: transportation;
  margin: 30px;
  margin-bottom: 0px;
  width: 300px;
  text-align: right;
  font-weight: bold;
`;
export const TransportationTag = styled.div`
  grid-area: transportationTag;
  margin: 30px;
  margin-bottom: 0px;
`;
export const ButtonToggle = styled.button`
  background: #ffffff;
  border: 3px solid #68c78e;
  box-sizing: border-box;
  border-radius: 20px;
  ${({ active }) => {
    return active ? `opacity: 1` : `opacity: 0.2`;
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
export const LocalTag = styled.div`
  grid-area: localTag;
  margin: 30px;
  margin-bottom: 0px;
`;
export const LocalTagDesc = styled.div`
  opacity: 0.2;
  font-size: 13.333px;
`;
export const LocalToggle = styled.button`
  border: none;
  background: transparent;
  ${({ active }) => {
    return active ? `color: #68c78e` : `opacity: 0.2`;
  }}
`;
export const Theme = styled.div`
  grid-area: theme;
  margin: 30px;
  margin-bottom: 0px;
  width: 300px;
  text-align: right;
  font-weight: bold;
`;
export const ThemeTag = styled.div`
  grid-area: themeTag;
  margin: 30px;
  margin-bottom: 0px;
`;
export const ThemeTagDesc = styled.div`
  opacity: 0.2;
  font-size: 13.333px;
`;
export const ThemeToggle = styled.button`
  border: none;
  background: transparent;
  ${({ active }) => {
    return active ? `color: #68c78e` : `opacity: 0.2 `;
  }}
`;
export const ImageUpload = styled.div`
  grid-area: imageUpload;
  margin: 30px;
  margin-bottom: 0px;
  width: 300px;
  text-align: right;
  font-weight: bold;
`;
export const ImageUploadContent = styled.div`
  grid-area: imageUploadContent;
  margin: 30px;
  margin-bottom: 0px;

  width: 306px;
  height: 175px;
  background: #ffffff;
  border: 3px solid #68c78e;
  box-sizing: border-box;

  ::placeholder {
    color: C4C4C4;
    padding: 20px;
  }
`;
export const ImageUploadPictureDiv = styled.div`
  position: relative;
  width: 300px;
  height: 230px;
`;
export const ImageFunc = styled.div``;
export const ImageAddButton = styled(AddBoxIcon)`
  position: absolute;
  bottom: 32px;
  right: 30px;
`;
export const ImageAllDeleteButton = styled(DeleteForeverIcon)`
  position: absolute;
  bottom: 32px;
  right: 55px;
`;
export const PictureNumbering = styled.div`
  position: absolute;
  left: 70px;
  bottom: 32px;
  font-weight: bold;
  color: #68c78e;
`;
export const PictureLeftButton = styled(ArrowLeftIcon)`
  position: absolute;
  bottom: 25px;
  left: 0px;
`;
export const PictureRightButton = styled(ArrowRightIcon)`
  position: absolute;
  bottom: 25px;
  right: 0px;
`;
export const ClearPicture = styled(ClearIcon)`
  position: absolute;
  bottom: 32px;
  right: 77px;
`;
export const CorrectPicture = styled(BorderColorIcon)`
  position: absolute;
  bottom: 32px;
  right: 100px;
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
    left: 50%;
    transform: translate(-50%, 0%);
    &.Mui-disabled {
      background-color: #fafafa;
    }
  }
`;

export const CourseCreateButton = styled.div`
  grid-area: courseCreateButton;
  margin: 90px;
  margin-bottom: 20px;
  width: 300px;
  height: 60px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  background: #68c78e;
  border-radius: 50px;

  position: relative;
  left: 10px;

  &: hover {
    cursor: pointer;
  }
`;

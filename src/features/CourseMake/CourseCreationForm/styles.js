/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ClearIcon from '@mui/icons-material/Clear';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddBoxIcon from '@mui/icons-material/AddBox';

export const CourseForm = styled.div`
  display: grid;
  grid-template-areas:
    ' courseHeader courseHeader courseHeader courseHeader '
    ' courseName courseNameContent courseNameContent courseNameContent '
    ' routeEdit routeList routeList routeList'
    ' courseDes courseDesContent courseDesContent courseDesContent'
    ' fixdedMember fixedMemberContent fixedMemberContent fixedMemberContent'
    ' budget budgetInput budgetInput budgetInput '
    ' transportation transportationTag transportationTag transportationTag'
    ' local localTag localTag localTag'
    ' theme themeTag themeTag themeTag'
    ' imageUpload imageUploadContent imageUploadContent imageUploadContent '
    ' . . courseCreateButton courseCreateButton';
`;
export const CourseHeader = styled.div`
  grid-area: courseHeader;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  color: #68c78e;
  margin: 60px;
  margin-bottom: 70px;
  margin-left: 300px;
`;
export const CourseName = styled.div`
  grid-area: courseName;
  margin: 30px;
  margin-bottom: 0px;
  width: 300px;
  text-align: right;
  font-weight: bold;
`;

export const CourseNameContent = styled.input`
  grid-area: courseNameContent;

  margin: 30px;
  margin-bottom: 0px;

  width: 400px;
  height: 40px;
  background: #ffffff;
  border: 3px solid #68c78e;
  box-sizing: border-box;
  border-radius: 20px;

  ::placeholder {
    color: C4C4C4;
    padding: 20px;
    font-family: Roboto;
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
  display: flex;
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
export const CourseDesContent = styled.textarea`
  grid-area: courseDesContent;
  margin: 30px;
  margin-bottom: 0px;

  width: 700px;
  height: 200px;
  background: #ffffff;
  border: 3px solid #68c78e;
  box-sizing: border-box;
  border-radius: 20px;

  ::placeholder {
    color: C4C4C4;
    padding: 20px;
    font-family: Roboto;
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
  opacity: 0.2;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
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

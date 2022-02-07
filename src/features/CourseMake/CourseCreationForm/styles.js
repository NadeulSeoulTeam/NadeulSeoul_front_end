/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

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

  width: 800px;
  height: 200px;
  background: #ffffff;
  border: 3px solid #68c78e;
  box-sizing: border-box;

  ::placeholder {
    color: C4C4C4;
    padding: 20px;
  }
`;
export const ImageUploadPictureDiv = styled.div`
  display: flex;
`;
export const ImageFunc = styled.div`
  float: right;
`;
export const CourseCreateButton = styled.div`
  grid-area: courseCreateButton;
  margin: 30px;
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